<?php

namespace App\Controller\Models\Departments;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/departments")
*/
class Departments extends AbstractController
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

        $CRUD = new CRUDController('departments','id');

        $departments = $CRUD->read();
        return $this->json($departments);
    }

    /**
        * @Route("", methods={"POST"})
     */
    public function create(Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['name','token'];
        $validation =  HelperController::validate_req($req,$parameters,true,2);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('departments','name');

        if( $CRUD->exist($req->get('name')))
            return $this->json('ERROR: Ya existe un departamento con este nombre','400');

        try {
            $CRUD->add( array(
                'name' => $req->get('name')
            ));
        } catch (\Throwable $th) {
            return $this->json('ERROR: No se ha podido crear el departamento','400');
        }
            
        return $this->json('Departamento creado con exito','200');
    }

    /**
        * @Route("/{id_department}", methods={"GET"})
     */
    public function show(String $id_department,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('departments','id');

        if( ! $CRUD->exist($id_department) )
            return $this->json('ERROR: El departamento no existe',400);

        $department = $CRUD->one($id_department);
        return $this->json($department);
    }

    /**
        * @Route("/{id_department}", methods={"POST"})
     */
    public function update(String $id_department,Request $request): Response
    {
        $req = $request->request; //'POST
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('departments','id');

        if( ! $CRUD->exist($id_department) )
            return $this->json('ERROR: El departamento no existe',400);

        $req->remove('token');

        HelperController::upload_img('departments',$id_department); //Subir imagen

        $keys = $req->keys();
        if( count($keys) >= 1){
            $update = [];
            foreach ($keys as $key) {
                $update[$key] =  $req->get($key);
            }
    
            try {
                $CRUD->update( $id_department ,$update );
            } catch (\Throwable $th) {
                return $this->json('ERROR: No se ha podido actualizar el departamento','400');
            }
        }
        
        return $this->json( 'Departamento actualizado correctamente','200');
    }

    /**
        * @Route("/{id_department}/users", methods={"GET"})
     */
    public function users_departments(String $id_department,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users_departments','id_department');

        $users = $CRUD->plenty( array('id_department' => $id_department));

        return $this->json($users);
    }
    
    /**
        * @Route("/{id_department}/users", methods={"POST"})
     */
    public function add_user_department(String $id_department,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_user','token'];
        $validation =  HelperController::validate_req($req,$parameters,true,2);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users_departments','id_user');

        $id_user = $req->get('id_user');
        $user_department_array = array(
            'id_user' => $id_user
            ,'id_department' => $id_department
        );
        $user_department =  $CRUD->plenty($user_department_array);
        
        if( count($user_department) != 0 )
            return $this->json('ERROR: El usuario ya pertenece a este departamento','400');

        try {
            $CRUD->add( $user_department_array );
        } catch (\Throwable $th) {
            return $this->json('ERROR: No se ha podido añadir el usuario al departamento','400');
        }

        return $this->json('Usuario añadido correctamente al departamento','200');
    }

    /**
        * @Route("/{id_department}/teams", methods={"GET"})
     */
    public function teams_departments(String $id_department,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('teams','id_department');

        $teams = $CRUD->plenty( array('id_department' => $id_department));

        return $this->json($teams);
    }

     /**
        * @Route("/{id_department}/teams", methods={"POST"})
     */
    public function teams_departments_add(String $id_department,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['name','token'];
        $validation =  HelperController::validate_req($req,$parameters,true,2);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('teams','id');

        $new_team = array(
            'name' => $req->get('name')
            ,'id_department' => $id_department
        );

        try {
            $CRUD->add( $new_team );
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR: No se ha podido añadir el equipo','400');
        }

        return $this->json('Se ha añadido el equipo correctamente','200');
    }
}