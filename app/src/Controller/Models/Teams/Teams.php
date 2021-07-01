<?php

namespace App\Controller\Models\Teams;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;


/**
    * @Route("/api/teams")
*/
class Teams extends AbstractController
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

        $CRUD = new CRUDController('teams','id');

        $teams = $CRUD->read();
        return $this->json($teams);
    }

    /**
        * @Route("/team/{id_team}/users", methods={"GET"})
     */
    public function team_users(String $id_team,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users_teams','id_team');

        $plenty = array(
            'id_team' => $id_team
        );

        $users = $CRUD->plenty($plenty);

        return $this->json($users);
    }

     /**
        * @Route("/team/{id_team}/users", methods={"POST"})
     */
    public function add_team_user(String $id_team,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['id_user','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('users_teams','id');

        try {
            $CRUD->add( array(
                'id_user' => $req->get('id_user')
                ,'id_team' => $id_team
            ));
        } catch (\Throwable $th) {
            return $this->json('ERROR: No se ha podido añadir el usuario al equipo','400');
        }

        //Notificacion
        //$notification =  array( 'id_user' => $req->get('id_user'), 'text' => 'Se le ha asignado un nuevo equipo' );
        //HelperController::push_notification($notification);
        //Notificacion

        return $this->json('Se ha añadido el usuario al equipo con exito');
    }

    /**
        * @Route("/team/{id_team}/tasks", methods={"GET"})
     */
    public function show_team_tasks(String $id_team,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks','id_team');

        $tasks = $CRUD->plenty( array('id_team' => $id_team, 'store' => 0));
        $tasks_with_status = [];

        //tasks_status
        $CRUD_tasks_status = new CRUDController('tasks_status','id');
        $CRUD_tasks_tags = new CRUDController('tasks_tags','id');
        $CRUD_subtasks = new CRUDController('subtasks','id');
        $CRUD_users_tasks = new CRUDController('users_tasks','id');
        $CRUD_users_subtasks = new CRUDController('users_subtasks','id');
        $CRUD_tasks_files= new CRUDController('tasks_files','id');
        
        foreach ($tasks as $t) {
            $status = $CRUD_tasks_status->one($t["id_status"])['name'];
            $t['status'] = $status;
            //tags
            $tags = $CRUD_tasks_tags->plenty( array('id_task' => $t['id']));
            $t['tags'] = $tags;
            //tags
            //subtask
            $subtasks = $CRUD_subtasks->plenty( array('id_task' => $t['id']));
            $t['subtasks'] = [];
            foreach ($subtasks as $subt) {
                $users = $CRUD_users_subtasks->plenty( array('id_subtask' => $subt['id']));
                $subt['users'] = $users;
                array_push( $t['subtasks'], $subt );
            }
            //subtask
            //responsables
            $users = $CRUD_users_tasks->plenty( array('id_task' => $t['id']));
            $t['users'] = $users;
            //responsables
            //files
            $files = $CRUD_tasks_files->plenty( array('id_task' => $t['id']));
            $t['files'] = $files;
            //files

            //progress
            $progress = 0;
            foreach ($tags as $tag ) {
                if( $tag['id_tag'] == 134 )
                    $progress += 10;
                if( $tag['id_tag'] == 136 )
                    $progress += 60;
                if( $tag['id_tag'] == 135 )
                    $progress += 30;
            }
            $t['progress'] = $progress;
            //progress


            array_push($tasks_with_status,$t);
        }

        return $this->json($tasks_with_status);
    }

    /**
        * @Route("/team/{id_team}/tasks/stored", methods={"GET"})
     */
    public function show_team_tasks_stored(String $id_team,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks','id_team');

        $tasks = $CRUD->plenty( array('id_team' => $id_team, 'store' => 1));
        $tasks_with_status = [];

        //tasks_status
        $CRUD_tasks_status = new CRUDController('tasks_status','id');
        $CRUD_tasks_tags = new CRUDController('tasks_tags','id');
        $CRUD_subtasks = new CRUDController('subtasks','id');
        $CRUD_users_tasks = new CRUDController('users_tasks','id');
        $CRUD_users_subtasks = new CRUDController('users_subtasks','id');
        $CRUD_tasks_files= new CRUDController('tasks_files','id');
        
        foreach ($tasks as $t) {
            $status = $CRUD_tasks_status->one($t["id_status"])['name'];
            $t['status'] = $status;
            //tags
            $tags = $CRUD_tasks_tags->plenty( array('id_task' => $t['id']));
            $t['tags'] = $tags;
            //tags

            //subtask
            $subtasks = $CRUD_subtasks->plenty( array('id_task' => $t['id']));
            $t['subtasks'] = [];
            foreach ($subtasks as $subt) {
                $users = $CRUD_users_subtasks->plenty( array('id_subtask' => $subt['id']));
                $subt['users'] = $users;
                array_push( $t['subtasks'], $subt );
            }
            //subtask

            //responsables
            $users = $CRUD_users_tasks->plenty( array('id_task' => $t['id']));
            $t['users'] = $users;
            //responsables
            //files
            $files = $CRUD_tasks_files->plenty( array('id_task' => $t['id']));
            $t['files'] = $files;
            //files

            //progress
            $progress = 0;
            foreach ($tags as $tag ) {
                if( $tag['id_tag'] == 134 )
                    $progress += 10;
                if( $tag['id_tag'] == 136 )
                    $progress += 60;
                if( $tag['id_tag'] == 135 )
                    $progress += 30;
            }
            $t['progress'] = $progress;
            //progress


            array_push($tasks_with_status,$t);
        }

        return $this->json($tasks_with_status);
    }

    /**
        * @Route("/team/{id_team}/tasks", methods={"POST"})
     */
    public function add_team_tasks(String $id_team,Request $request): Response
    {
        $req = $request->request; //'POST
        $parameters = ['name','status','token'];
        $validation = HelperController::validate_req($req,$parameters);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $CRUD = new CRUDController('tasks','id');

        if( $req->get('name') == "" )
            return $this->json('ERROR: No se ha podido crear la tarea','400');

        try {
            $id_task = $CRUD->add( array(
                    'name' => $req->get('name')
                    ,'id_user_update ' => $validation[1]['id']
                    ,'id_status' => $req->get('status')
                    ,'id_team' => $id_team
                ));

            $tasks_tags_CRUD = new CRUDController('tasks_tags','id');
            for ($i=1; $i < 5 ; $i++) { 
                $tasks_tags_CRUD->add( array(
                    'id_task' => $id_task 
                    ,'id_tag ' => $i
                ));
            }

            $CRUD_teams = new CRUDController('teams','id');
            $CRUD_users_tasks = new CRUDController('users_tasks','id');

            $team = $CRUD_teams->one($id_team);
            $CRUD_users_tasks->add( array(
                'id_user' => $team['id_user']
                ,'id_task' => $id_task 
            ));


        } catch (\Throwable $th) {
            throw $th;
            return $this->json('ERROR: No se ha podido crear la tarea','400');
        }

        return $this->json('Tarea creada con exito');
    }

    //Organigrama
    /**
        * @Route("/team/{id_team}/org_chart", methods={"GET"})
     */
    public function show_org_chart(String $id_team,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        try {
            $CRUD_teams = new CRUDController('teams','id');
            $TEAM = $CRUD_teams->one($id_team);

            $CRUD_departments = new CRUDController('departments','id');
            $DEPARTMENT = $CRUD_departments->one($TEAM['id_department']);

            $CRUD_users = new CRUDController('users','id');
            $responsable_DEPARTMENT = $CRUD_users->one($DEPARTMENT['id_user']);
            $responsable_TEAM = $CRUD_users->one($TEAM['id_user']);

            
            $CRUD_users_teams = new CRUDController('users_teams','id_team');

            $users = $CRUD_users_teams->plenty( array('id_team' => $id_team));
            
            $users_TEAM = [];
            foreach ($users as $key => $user) {
                if( $user['id_user'] != $responsable_DEPARTMENT['id']
                    && $user['id_user'] != $responsable_TEAM['id']
                ){
                    
                    array_push($users_TEAM,$CRUD_users->one($user['id_user']));
                }
            }

            $org_chart = [];
            $org_chart['department'] = $responsable_DEPARTMENT;
            $org_chart['team'] = $responsable_TEAM;
            $org_chart['users'] = $users_TEAM;
            
            return $this->json($org_chart);

        } catch (\Throwable $th) {
            //throw $th;
            return $this->json('ERROR: No se ha podido mostrar este organigrama','400');
        }
        
        return $this->json('ERROR: No se ha podido mostrar este organigrama','400');
    }

}