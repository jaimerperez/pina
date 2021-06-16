<?php

namespace App\Controller\Models\Tags;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/tags")
*/
class Tags extends AbstractController
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

        $tags = [];

        $CRUD = new CRUDController('tags','id');
        $tags['tags'] = $CRUD->read();

        $CRUD = new CRUDController('tags_types','id');
        $tags['types'] = $CRUD->read();

        return $this->json($tags);
    }

   
}