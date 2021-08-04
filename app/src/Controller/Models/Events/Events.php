<?php

namespace App\Controller\Models\Events;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/events")
*/
class Events extends AbstractController
{

    /**
        * @Route("/{id_team}/last_views", methods={"GET"})
     */
    public function show_team_last_views(String $id_team,Request $request): Response
    {
        $req = $request->query; //GET
        $validation = HelperController::validate_req($req,['token']);
        if(! $validation[0])
            return $this->json($validation[1],'400');

        $events = [];
        try {
            $CRUD = new CRUDController('events','id');
            $event_text = 'ver tablero ' . $id_team;
            
            $events_full = $CRUD->plenty( array('name' => $event_text), 0, 0, 'id', 'DESC', '1M' );
            foreach ($events_full as $e) {
                if ( ! in_array($e['id_user'],array_column($events, 'id_user')) ){
                    array_push( $events, $e );
                }
            }
        } catch (\Throwable $th) {
            throw $th;
            return $this->json('Error',400);
        }
        
        return $this->json($events);
    }
   
}