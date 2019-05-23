<?php

namespace App\Controller;

use App\Repository\Movies;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class MainController extends AbstractController
{
    /**
     * @Route("api/movies/upcoming", name="Upcoming")
     */
    public function index(Request $req)
    {
      $page = $req->query->get('page');
      $query = $req->query->get('query');
      $movies = new Movies();
      $upcoming = $movies->getUpcoming($page, $query);
      return new JsonResponse($upcoming);
    }

    /**
     * @Route("api/movies/{id}", name="Movie")
     */
    public function detail(Request $req)
    {
      $id = $req->get('id');
      $movies = new Movies();
      $movie = $movies->getDetail($id);
      return new JsonResponse($movie);
    }
}
