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
    public function test_upload(Request $request): Response
    {
        //HelperController::upload_img('users','1');
        
        return $this->json('OK','200');
    }

    /**
     * @Route("/api/test", methods={"GET"})
     */
    public function test_route(Request $request): Response
    {
        $email = new EmailController();
        $address = 'cristian.perez.hernandez.96@gmail.com';
        $body = '12345';

        $r = $email->send_email($address,$body);
        if( $r )
            return $this->json('ok','200');
        
        return $this->json('ERROR:','400'); 
    }
    
}
