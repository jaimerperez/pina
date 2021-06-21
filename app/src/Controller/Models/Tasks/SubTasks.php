<?php

namespace App\Controller\Models\Tasks;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/subtasks")
*/
class SubTasks extends AbstractController
{
    private function add_id_user_update(String $id_subtask,String $id_user)
    {
        $CRUD_subtasks = new CRUDController('subtasks','id');
        $CRUD_subtasks->update($id_subtask,array(
            'id_user_update ' => $id_user
        ));
    }

    /**
        * @Route("/{id_subtask}", methods={"DELETE"})
     */
    public function delete_task(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'DELETE
        $parameters = ['token'];
        
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_subtasks = new CRUDController('subtasks','id');

        $CRUD_subtasks->delete(  $id_subtask );
        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('Tarea eliminada con exito');
    }

    /**
        * @Route("/{id_subtask}/name", methods={"POST"})
     */
    public function update_subtask_name(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['name','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_subtasks = new CRUDController('subtasks','id');
        $CRUD_subtasks->update($id_subtask,array(
            'name' => $req->get('name')
        ));
        
        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('ok');
    }

    /**
        * @Route("/{id_subtask}/subtag", methods={"POST"})
     */
    public function update_subtask_tag(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_subtag','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_subtasks = new CRUDController('subtasks','id');

        try {
            $CRUD_subtasks->update($id_subtask,array(
                'id_subtag' => $req->get('id_subtag')
            ));
            
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR','400');
        }
        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('OK');
    }


    /**
        * @Route("/{id_subtask}/time_limit", methods={"POST"})
     */
    public function update_task_time_limit(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['time_limit','time_limit_end','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_subtasks = new CRUDController('subtasks','id');

        try {
            $CRUD_subtasks->update($id_subtask,array(
                'time_limit' => $req->get('time_limit')
                ,'time_limit_end' => $req->get('time_limit_end')
            ));
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR, no se ha podido cambiar el plazo','400');
        }

        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('OK');
    }


    /**
        * @Route("/{id_subtask}/message", methods={"POST"})
     */
    public function add_message(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['message','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('subtasks_messages','id');

        try {
            $CRUD->add( array(
                'message' => $req->get('message')
                ,'id_subtask' => $id_subtask
                ,'id_user' => $validation[1]['id']
            ));
             
         } catch (\Throwable $th) {
             throw $th;
             return $this->json('ERROR: No se ha podido crear el mensaje','400');
         }

        return $this->json('OK');
    }

    /**
        * @Route("/{id_subtask}/messages", methods={"GET"})
     */
    public function read_messages(String $id_subtask,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('subtasks_messages','id');

        $messages = $CRUD->plenty( array('id_subtask' => $id_subtask));
        return $this->json($messages);
    }

    /**
        * @Route("/{id_subtask}/time_working/add", methods={"POST"})
     */
    public function update_time_working_manual(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token','time_working']; //segundos
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_subtasks = new CRUDController('subtasks','id');

        $subtask = $CRUD_subtasks->one($id_subtask);
        //$time_working = intval($task['time_working']) + intval($req->get('time_working'));
        $time_working = intval($req->get('time_working'));

        try {
            $CRUD_subtasks->update( $id_subtask ,array(
                'time_working' => $time_working
            ));
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR: No se ha podido eliminar el mensaje','400');
        }

        return $this->json('Se han añadido '. $req->get('time_working') . 'segundos a la tarea');
    }

    /**
        * @Route("/{id_subtask}/time_working", methods={"POST"})
     */
    public function update_time_working(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_subtasks = new CRUDController('subtasks','id');

        $subtask = $CRUD_subtasks->one($id_subtask);

        if( $subtask ){
            $t = [];
            try {
                if( $subtask['pause'] == 1 ){
                    $t['pause'] = 0;
                    $t['last_play'] = date('Y-m-d H:i:s');
    
                    $CRUD_subtasks->update($id_subtask,$t);
    
                    return $this->json("play");
                }else{

                    $diff = time() - strtotime($subtask['last_play']);

                    $t['pause'] = 1;
                    $t['last_play'] = '0000-00-00 00:00:00';
                    $t['time_working'] = $subtask['time_working'] + $diff ;

                    $CRUD_subtasks->update($id_subtask,$t);
                    
                    return $this->json("pause, tiempo trabajado: $diff");
                }
            } catch (\Throwable $th) {
                //throw $th;
                return $this->json('ERROR');
            }

        }else{
            return $this->json('ERROR: No existe ninguna tarea con ese ID','400');
        }
        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('Ok');
    }

       /**
        * @Route("/{id_subtask}/user", methods={"POST"})
     */
    public function add_user(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_user','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_users_subtasks = new CRUDController('users_subtasks','id');

        try {
            $CRUD_users_subtasks->add( array(
                'id_user' => $req->get('id_user')
                ,'id_subtask' => $id_subtask
            ));
             
         } catch (\Throwable $th) {
             //throw $th;
             return $this->json('ERROR: No se ha podido añadir un usuario responsable','400');
         }

        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('OK');
    }

    /**
        * @Route("/{id_subtask}/user", methods={"DELETE"})
     */
    public function delete_subtask_user(String $id_subtask,Request $request): Response
    {
        $req = $request->request; //'DELETE
        $parameters = ['id_user','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');


        $CRUD_users_subtasks = new CRUDController('users_subtasks','id');
        $users_subtasks = $CRUD_users_subtasks->plenty(array(
            'id_subtask' => $id_subtask
            ,'id_user' => $req->get('id_user')
        ));
        try {
            $CRUD_users_subtasks->delete(  $users_subtasks[0]['id'],true );
        } catch (\Throwable $th) {
            throw $th;
        }

        $this->add_id_user_update($id_subtask,$validation[1]['id']);
        return $this->json('Responsable eliminado con exito');
    }
   
}