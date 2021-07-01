<?php

namespace App\Controller\Models\Tasks;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/tasks")
*/
class Tasks extends AbstractController
{

    private function add_id_user_update(String $id_task,String $id_user)
    {
        $CRUD_tasks = new CRUDController('tasks','id');
        $CRUD_tasks->update($id_task,array(
            'id_user_update ' => $id_user
        ));
    }

    /**
        * @Route("/{id_task}", methods={"DELETE"})
     */
    public function delete_task(String $id_task,Request $request): Response
    {
        $req = $request->request; //'DELETE
        $parameters = ['token'];
        
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');

        $CRUD_tasks->delete(  $id_task );

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('Tarea eliminada con exito');
    }
    /**
        * @Route("/{id_task}/name", methods={"POST"})
     */
    public function update_task_name(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['name','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');
        $CRUD_tasks->update($id_task,array(
            'name' => $req->get('name')
        ));
        
        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('ok');
    }
    /**
        * @Route("/{id_task}/tags", methods={"POST"})
     */
    public function update_task_tag(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_tag','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tags = new CRUDController('tags','id');
        $CRUD_tags_types = new CRUDController('tags_types','id');
        $CRUD_tasks_tags = new CRUDController('tasks_tags','id');

        $tag = $CRUD_tags->one( $req->get('id_tag') );
        $tag_type = $CRUD_tags->one( $tag['id_type'] );

        $task_tags = $CRUD_tasks_tags->plenty(array(
            'id_task' => $id_task
        ));

        
        foreach ($task_tags as $tt) {
           $ttag = $CRUD_tags->one($tt['id_tag']);
           $ttag_type = $CRUD_tags->one( $ttag['id_type'] );

           if($tag_type == $ttag_type){
                $CRUD_tasks_tags->update($tt['id'],array(
                    'id_tag' => $req->get('id_tag')
                ));

                $progress = 0;
                $new_task_tags = $CRUD_tasks_tags->plenty(array(
                    'id_task' => $id_task
                ));
                foreach ($new_task_tags as $tags) {
                    if( $tags['id_tag'] == 134 )
                        $progress += 10;
                    if( $tags['id_tag'] == 136 )
                        $progress += 60;
                    if( $tags['id_tag'] == 135 )
                        $progress += 30;
                }
                if( $progress == 100 ){
                    $CRUD_tasks = new CRUDController('tasks','id');
                    $CRUD_tasks->update($id_task,array(
                        'id_status ' => 4
                    ));
                }

                $this->add_id_user_update($id_task,$validation[1]['id']);
                return $this->json('ok');
           }
        }
        
        return $this->json('ERROR','400');
    }

    /**
        * @Route("/{id_task}/status", methods={"PUT"})
     */
    public function update_task_status(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_status','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');

        try {
            $CRUD_tasks->update($id_task,array(
                'id_status' => $req->get('id_status')
            ));
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR, no se ha podido cambiar el estado','400');
        }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json( [$req->get('id_status'),$id_task]);
    }

    /**
        * @Route("/{id_task}/time_limit", methods={"POST"})
     */
    public function update_task_time_limit(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['time_limit','time_limit_end','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');

        try {
            $CRUD_tasks->update($id_task,array(
                'time_limit' => $req->get('time_limit')
                ,'time_limit_end' => $req->get('time_limit_end')
            ));
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR, no se ha podido cambiar el plazo','400');
        }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('OK');
    }

    /**
        * @Route("/{id_task}/subtask", methods={"POST"})
     */
    public function add_subtask(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['name','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('subtasks','id');

        if( $req->get('name') == "" )
            return $this->json('ERROR: No se ha podido crear la tarea','400');

        try {
            $CRUD->add( array(
                 'name' => $req->get('name')
                 ,'id_task' => $id_task
                 ,'id_subtag' => 1
             ));
             
         } catch (\Throwable $th) {
             //throw $th;
             return $this->json('ERROR: No se ha podido crear la subtarea','400');
         }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('OK');
    }

     /**
        * @Route("/{id_task}/file", methods={"POST"})
     */
    public function add_file(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks_files','id');

        try {
            $name = uniqid();

            $file_name = HelperController::upload_file($name); //Subir imagen  
            
            $CRUD->add( array(
                'name' => $file_name
                ,'id_task' => $id_task
            ));

         } catch (\Throwable $th) {
             throw $th;
             //return $this->json($th,'400');
             return $this->json('ERROR: No se ha podido guardar el archivo','400');
         }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('OK');
    }

    /**
        * @Route("/files/{file_name}", methods={"DELETE"})
     */
    public function delete_task_file(String $file_name,Request $request): Response
    {
        $req = $request->request; //'DELETE
        $parameters = ['token'];
        
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks_files','name');

        $CRUD->delete(  $file_name );

        return $this->json('Archivo eliminado con exito');
    }

    /**
        * @Route("/{id_task}/message", methods={"POST"})
     */
    public function add_message(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['message','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks_messages','id');

        try {
            $CRUD->add( array(
                'message' => $req->get('message')
                ,'id_task' => $id_task
                ,'id_user' => $validation[1]['id']
            ));

            $CRUD_tasks = new CRUDController('tasks','id');
            $messages = $CRUD_tasks->one($id_task)['messages'] + 1;
            $CRUD_tasks->update($id_task,array(
                'messages' => $messages
            ));
             
         } catch (\Throwable $th) {
             //throw $th;
             return $this->json('ERROR: No se ha podido crear el mensaje','400');
         }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('OK');
    }

    /**
        * @Route("/{id_task}/messages", methods={"GET"})
     */
    public function read_messages(String $id_task,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks_messages','id');

        $messages = $CRUD->plenty( array('id_task' => $id_task));
        return $this->json($messages);
    }

    /**
        * @Route("/messages/{id_message}", methods={"DELETE"})
     */
    public function delete_message(String $id_message,Request $request): Response
    {
        $req = $request->request; //'DELETE
        $parameters = ['token'];
        
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks_messages = new CRUDController('tasks_messages','id');
        $CRUD_tasks = new CRUDController('tasks','id');
        
        try {
            $t_m =  $CRUD_tasks_messages->one(  $id_message );
            $CRUD_tasks_messages->delete(  $id_message );
            $task =  $CRUD_tasks->one(  $t_m['id_task'] );
            $task['messages'] -= 1;
            $task['id_user_update'] = $validation[1]['id'];
            $CRUD_tasks->update( $task['id'] , $task );
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR: No se ha podido eliminar el mensaje','400');
        }

        return $this->json('Mensaje eliminado con exito');
    }

    /**
        * @Route("/{id_task}/time_working/add", methods={"POST"})
     */
    public function update_time_working_manual(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token','time_working']; //segundos
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');

        $task = $CRUD_tasks->one($id_task);
        //$time_working = intval($task['time_working']) + intval($req->get('time_working'));
        $time_working = intval($req->get('time_working'));

        try {
            $CRUD_tasks->update( $id_task ,array(
                'time_working' => $time_working
            ));
        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR: No se ha podido eliminar el mensaje','400');
        }

        return $this->json('Se han añadido '. $req->get('time_working') . 'segundos a la tarea');
    }

     /**
        * @Route("/{id_task}/time_working", methods={"POST"})
     */
    public function update_time_working(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');

        $task = $CRUD_tasks->one($id_task);

        if( $task ){
            $t = [];
            try {
                if( $task['pause'] == 1 ){
                    $t['pause'] = 0;
                    $t['last_play'] = date('Y-m-d H:i:s');
    
                    $CRUD_tasks->update($id_task,$t);
    
                    return $this->json("play");
                }else{

                    $diff = time() - strtotime($task['last_play']);

                    $t['pause'] = 1;
                    $t['last_play'] = '0000-00-00 00:00:00';
                    $t['time_working'] = $task['time_working'] + $diff ;

                    $CRUD_tasks->update($id_task,$t);
                    
                    return $this->json("pause, tiempo trabajado: $diff");
                }
            } catch (\Throwable $th) {
                //throw $th;
                return $this->json('ERROR');
            }

        }else{
            return $this->json('ERROR: No existe ninguna tarea con ese ID','400');
        }


        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('Ok');
    }


    /**
        * @Route("/{id_task}/user", methods={"POST"})
     */
    public function add_user(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_user','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_users_tasks = new CRUDController('users_tasks','id');

        try {
            $CRUD_users_tasks->add( array(
                'id_user' => $req->get('id_user')
                ,'id_task' => $id_task
            ));
             
         } catch (\Throwable $th) {
             //throw $th;
             return $this->json('ERROR: No se ha podido añadir un usuario responsable','400');
         }

        try {
            $this->add_id_user_update($id_task,$validation[1]['id']);
            //Notificacion
            $CRUD_tasks = new CRUDController('tasks','id');
            $task = $CRUD_tasks->one($id_task);
            $notification_text = 'Tarea asignada: "'. $task['name'] . '" ('. $id_task .')';
            HelperController::push_notification( $req->get('id_user'), $notification_text, 0, 1 );
            //Notificacion
        } catch (\Throwable $th) {
            //throw $th;
        }

        return $this->json('OK');
    }

    /**
        * @Route("/{id_task}/user", methods={"DELETE"})
     */
    public function delete_task_user(String $id_task,Request $request): Response
    {
        $req = $request->request; //'DELETE
        $parameters = ['id_user','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');


        $CRUD_users_tasks = new CRUDController('users_tasks','id');
        $users_tasks = $CRUD_users_tasks->plenty(array(
            'id_task' => $id_task
            ,'id_user' => $req->get('id_user')
        ));
        try {
            $CRUD_users_tasks->delete(  $users_tasks[0]['id'],true );
        } catch (\Throwable $th) {
            throw $th;
        }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('Responsable eliminado con exito');
    }

    /**
        * @Route("/{id_task}/store", methods={"POST"})
     */
    public function task_store(String $id_task,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD_tasks = new CRUDController('tasks','id');

        try {
            $task = $CRUD_tasks->one($id_task);
            $t_store = 0;
            if( $task['store'] == 0 )
                $t_store = 1;
            $CRUD_tasks->update( $id_task ,array(
                'store' => $t_store
            ));
             
         } catch (\Throwable $th) {
             //throw $th;
             return $this->json('ERROR: No se ha podido archivar/desarchivar la tarea','400');
         }

        $this->add_id_user_update($id_task,$validation[1]['id']);
        return $this->json('OK');
    }
   
}