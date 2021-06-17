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
    * @Route("/api/users")
*/
class Users extends AbstractController
{
    /**
        * @Route("", methods={"GET"})
     */
    public function all(Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','id');

        $users = $CRUD->read();
        return $this->json($users);
    }

    /**
        * @Route("", methods={"POST"})
     */
    public function create(Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['email','token'];
        $validation =  HelperController::validate_req($req,$parameters,true,2);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','email');
        $pass = HelperController::random_string();

        if( $CRUD->exist($req->get('email')))
            return $this->json('ERROR: Ya existe un usuario con ese email','400');

        $email = new EmailController();
        $address = $req->get('email');
        $subject = 'Email de verificación';
        $body = '<p> Su contraseña es: <b style="color:red">'. $pass .'</b></p>'."<a style='color:blue' href='http://10.10.244.230:8081/user'> Piña </a>";
        
        $smtp_status = $email->send_email($address,$body,$subject);
        if( $smtp_status !== true )
            return $this->json($smtp_status[1],'400');
        
        try {
            $CRUD->add( array(
                'email' => $req->get('email')
                ,'password' => password_hash($pass, PASSWORD_DEFAULT)
                ,'id_rol' => $req->get('id_rol') ?? 3
            ));
        } catch (\Throwable $th) {
            return $this->json('ERROR: No se ha podido crear el usuario','400');
        }

        //Crear usuario en el departamento
        if($validation[1]['id_rol']  == 2){
            $new_user = $CRUD->one($req->get('email'));

            $CRUD_users_departments = new CRUDController('users_departments','id_user');
            $user_department = $CRUD_users_departments->one($validation[1]['id']);

            $CRUD_users_departments->add( array(
                'id_user' => $new_user['id']
                ,'id_department' => $user_department['id_department']
            ));
        }
            
        return $this->json('Usuario: '. $req->get('email') .' creado con exito, se le enviará un mail con la contraseña: ' . $pass  ,'200');
    }

    /**
        * @Route("/user", methods={"GET"})
     */
    public function user(Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $user = $validation[1];
        return $this->json($user);
    }

    /**
        * @Route("/user/{id_user}", methods={"GET"})
     */
    public function show(String $id_user,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','id');

        if( ! $CRUD->exist($id_user) )
            return $this->json('ERROR: El usuario no existe',400);

        $user = $CRUD->one($id_user);
        return $this->json($user);
    }

    /**
        * @Route("/user/{id_user}", methods={"POST"})
     */
    public function update(String $id_user,Request $request): Response
    {
        $req = $request->request; //'POST

        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $req->remove('token');

        HelperController::upload_img('users',$id_user); //Subir imagen  
        
        $params = $req->keys();
        if( count($params) >= 1){
            $user = [];
            foreach ($params as $k) {
                if($k == 'password'){
                    $user[$k] =  password_hash($req->get($k), PASSWORD_DEFAULT);
                }else{
                    $user[$k] = $req->get($k);
                }
                
            }
    
            try {
                $CRUD = new CRUDController('users','id');
                $CRUD->update($id_user,$user);
                
            } catch (\Throwable $th) {
                //throw $th;
                return $this->json('ERROR: No se ha podido editar el usuario',400);
            }
        }
        
        return $this->json('Usuario editado con exito',200);
    }

    /**
        * @Route("/user/{id_user}/departments", methods={"GET"})
     */
    public function show_departments(String $id_user,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','id');

        if( ! $CRUD->exist($id_user) )
            return $this->json('ERROR: El usuario no existe',400);

        $CRUD = new CRUDController('users_departments','id_user');

        $users_departments = $CRUD->plenty( array('id_user' => $id_user));
        $CRUD_departments = new CRUDController('departments','id');
        $departments = [];
        foreach ($users_departments as $u_d) {
            $department = $CRUD_departments->one($u_d["id_department"]);
            array_push($departments,$department);
        }

        return $this->json($departments);
    }

    /**
        * @Route("/user/{id_user}/teams", methods={"GET"})
     */
    public function show_teams(String $id_user,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users','id');

        if( ! $CRUD->exist($id_user) )
            return $this->json('ERROR: El usuario no existe',400);

        $CRUD = new CRUDController('users_teams','id_user');

        $users_teams = $CRUD->plenty( array('id_user' => $id_user));
        $CRUD_teams = new CRUDController('teams','id');
        $teams = [];
        foreach ($users_teams as $u_t) {
            $team = $CRUD_teams->one($u_t["id_team"]);
            array_push($teams,$team);
        }

        return $this->json($teams);
    }

}
