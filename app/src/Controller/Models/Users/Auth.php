<?php

namespace App\Controller\Models\Users;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;
use App\Controller\EmailController;

/**
    * @Route("/api/auth")
*/
class Auth extends AbstractController
{
    /**
     * @Route("/login", methods={"POST"})
     */
    public function login(Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['email','password'];
        $validation = HelperController::validate_req($req,$parameters,false);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','email');

        if( ! $CRUD->exist($req->get('email')))
            return $this->json('ERROR: NO EXISTE EL USUARIO','400');

        $usuario = null;
        try {
            $usuario = $CRUD->one( $req->get('email') );
            if( ! password_verify($req->get('password'),$usuario['password'])){
                return $this->json('ERROR: CONTRASEÑA INCORRECTA','400');
            }
        } catch (\Throwable $th) {
            return $this->json('ERROR EN LA BASE DE DATOS','400');
        }

        $token_CRUD = new CRUDController('tokens','id');
        $token =  HelperController::random_string(16);
        $token_CRUD->add(array(
            'value'=> $token
            ,'id_user'=> $usuario["id"]
        ));
            
        return $this->json($token,'200');
    }

    /**
     * @Route("/change_password", methods={"POST"})
     */
    public function change_password(Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token','password'];
        $validation = HelperController::validate_req($req,$parameters,false);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        try {
            $remember_passwords_CRUD = new CRUDController('remember_passwords','token');
            $id_user = $remember_passwords_CRUD->one($req->get('token'))['id_user'];

            $users_CRUD = new CRUDController('users','id');
            $users_CRUD->update($id_user,array(
                'password' => password_hash($req->get('password'), PASSWORD_DEFAULT)
            ));

        } catch (\Throwable $th) {
            return $this->json('ERROR','400');
        }

        return $this->json('Contraseña cambiada con exito','200');
    }

    /**
     * @Route("/remember_password", methods={"POST"})
     */
    public function remember_password(Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['email'];
        $validation = HelperController::validate_req($req,$parameters,false);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','email');

        if( ! $CRUD->exist($req->get('email')))
            return $this->json('ERROR: No existe ese usuario','400');

        $usuario = $CRUD->one( $req->get('email') );
        $remember_passwords_CRUD = new CRUDController('remember_passwords','id');
        $token = HelperController::random_string();
        $remember_passwords_CRUD->add(array(
            'token'=>  $token
            ,'id_user'=> $usuario["id"]
        ));

        $email = new EmailController();
        $address = $req->get('email');
        $subject = 'Recuperar contraseña';
        $body = "<a style='color:blue' href='http://". $_SERVER['HTTP_HOST'] ."/passwordchange?token=$token'> Click aqui para cambiar su contraseña </a>";
        
        $smtp_status = $email->send_email($address,$body,$subject);
        if( $smtp_status !== true )
            return $this->json($smtp_status[1],'400');
            
        return $this->json('Ok','200');
    }
}