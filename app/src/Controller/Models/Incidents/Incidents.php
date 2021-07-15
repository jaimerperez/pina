<?php

namespace App\Controller\Models\Incidents;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/incidents")
*/
class Incidents extends AbstractController
{

    /**
        * @Route("/{id_team}", methods={"POST"})
     */
    public function add_Incident(String $id_team,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['title','message','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');


        $CRUD = new CRUDController('tasks','id');

        try {
            $CRUD->add( array(
                'name' => $req->get('title')
                //,'text' => $req->get('text')
                ,'id_status' => 3
                ,'id_team' => $id_team
                ,'incident' => 1
                ,'email' =>  $validation[1]['email']
            ));
            //sleep(2);
            $task = $CRUD->read_ordered( 'id','DESC',1)[0];

            //
            $tasks_tags_CRUD = new CRUDController('tasks_tags','id');
            $tags_types_CRUD = new CRUDController('tags_types','id');
            $tags_types = $tags_types_CRUD->read();
            
            $i_type = 1;
            foreach ($tags_types as $type) {
                $tasks_tags_CRUD->add( array(
                    'id_task' => $task['id']
                    ,'id_tag ' => $i_type
                ));
                $i_type++;
            }

            $CRUD = new CRUDController('tasks_messages','id');
            $CRUD->add( array(
                'message' => $req->get('message')
                ,'id_task' => $task['id']
                ,'id_user' => $validation[1]['id']
            ));

            $CRUD_tasks = new CRUDController('tasks','id');
            $messages = $CRUD_tasks->one($task['id'])['messages'] + 1;
            $CRUD_tasks->update($task['id'],array(
                'messages' => $messages
            ));

        } catch (\Throwable $th) {
            throw $th;
            return $this->json('ERROR: No se ha podido crear la incidencia','400');
        }


        return $this->json('OK');
    }
   
}