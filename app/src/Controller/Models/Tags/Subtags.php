<?php

namespace App\Controller\Models\Tags;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;

use App\Controller\CRUDController;
use App\Controller\HelperController;

/**
    * @Route("/api/subtags")
*/
class Subtags extends AbstractController
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

        $CRUD = new CRUDController('subtags','id');
        $tags['tags'] = $CRUD->read();

        return $this->json($tags);
    }

   
}