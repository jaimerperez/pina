<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\File\Stream;

use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

use Spipu\Html2Pdf\Html2Pdf;

class APIController extends AbstractController
{

    /**
     * @Route("/assets/images/{type}/{name}", methods={"GET"})
     */
    public function getImg(string $type, string $name ,Request $request)
    {
        try {
            $file = 'assets/images/'.$type.'/'.$name. '.png';
            //$file = 'assets/images/departments/1.png';
            header("Content-type: image/png");
            readfile("$file");
            exit;
        } catch (\Throwable $th) {
            return $this->json('No existe la imagen','400');
        }
    }

    /**
     * @Route("/assets/files/{name}", methods={"GET"})
     */
    public function getFile(string $name ,Request $request)
    {
        try {
            $file = 'assets/files/'.$name;
            $content_type = mime_content_type($file);
            header("Content-type: $content_type");
            readfile("$file");
            exit;
        } catch (\Throwable $th) {
            return $this->json('No existe el archivo','400');
        }
    }
    
    /**
     * @Route("/api/user", methods={"POST"})
     */
    public function get_user(Request $request): Response
    {
        $req = $request->request; //'POST
        $validation = $this->validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $user = $validation[1];
        return $this->json($user);
    }


    /**
     * @Route("/api/rol/{rol_id}", methods={"GET"})
     */
    public function get_rol(string $rol_id,Request $request): Response
    {
        $req = $request->query;
        $validation = $this->validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('roles','id');
        $rol = $CRUD->one($rol_id);
        if($rol == null)
            return $this->json('ERROR: No existe un rol con ese id','400');
        return $this->json($rol['name']);
    }

    /**
     * @Route("/api/table/{table}", methods={"GET"})
     */
    public function show_table(string $table,Request $request): Response
    {
        $req = $request->query;
        $validation = $this->validate_req($req,['token'],true,2);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController($table,'id');
        $all = $CRUD->read();
        return $this->json($all);
    }

    private function validate_token($tk): Array
    {
        $token_CRUD = new CRUDController('tokens','value');
        $token = $token_CRUD->one($tk);
        //var_dump($token);
        if($token === null || $token == false)
            return [false,"ERROR: Token no valido"];

        return [true,$token['id_user']];
    }

    private function validate_req($req, $param, $token=true, $permits=3)
    {
        foreach ($param as $p) {
            if( ! $req->has($p))
                return [false,'ERROR: Falta el campo ' . $p];
        }

        if($token){
            $tk = $req->get('token');
            $validation = $this->validate_token($tk);
            if( ! $validation[0] ){
                return [false,$validation[1]];
            }

            $CRUD = new CRUDController('users','id');
            $user = $CRUD->one($validation[1]);

            if($permits < 3){
                if($user["id_rol"] > $permits ){ // 1 = admin
                    return [false,'ERROR: No tiene permisos para ejecutar esta accion'];
                }
            }
            return [true,$user];
        }

        return true;
    }

    /**
     * @Route("/api/upload", methods={"POST"})
     */
    public function upload(Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $file_name = '';
        try {
            $name = uniqid();
            $file_name = HelperController::upload_file($name); //Subir imagen  

         } catch (\Throwable $th) {
             return $this->json('ERROR: No se ha podido guardar el archivo','400');
         }
        
        return $this->json($file_name);
    }

    /**
     * @Route("/api/generar_informe", methods={"GET"})
     */
    public function generar_informe(Request $request): Response
    {
        $req = $request->query; //GET
        //$req = $request->request; //'POST
        
        $id_team = $req->get('id_team');
        $CRUD_teams = new CRUDController('teams','id');
        $team = $CRUD_teams->one($id_team);

        $mesesN=array(1=>"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        $ano = date("Y");

        $dia = date("j");
        $mes = date("n");
        $mes_str = $mesesN[$mes];

        $date_start = time() - (5 * 24 * 60 * 60);
        $dia_start  = date("j", $date_start);
        $mes_start  = date("n", $date_start);
        $mes_start_str = $mesesN[$mes_start];
        
        $email = new EmailController();
        $address = $id_team == 4 ? 'sandra.soutelo@postal3.es' : 'cristian.perez@postal3.es';
        $subject = 'INFORME SEMANAL ' . strtoupper($team['name']);
        $periodo = "$dia_start de $mes_start_str al $dia de $mes_str";
        $body = "<h1>$subject</h1>";
        
        //PDF
        ob_start();
        include '../templates/api/tabla.php';
        $content = ob_get_clean();
        $html2pdf = new Html2Pdf('L');
        $html2pdf->writeHTML($content);

        //PDF
        $pdf_name = "$subject $dia"."_$mes_str"."_$ano";
        $attachment = $html2pdf->output($pdf_name, 'S');
        $r = $email->send_email_with_pdf($address,$body,$subject,$attachment, $pdf_name);
        if( ! $r )
            return $this->json('ERROR:','400'); 
        
        return $this->json('ok','200');
        
    }

    /**
     * @Route("/api/test", methods={"GET"})
     */
    public function test_route(Request $request): Response
    {
    
        return $this->json('ok','200');
    }
    
}
