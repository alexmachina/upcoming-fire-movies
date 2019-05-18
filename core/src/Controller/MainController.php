<?php

namespace App\Controller;

use App\Repository\Movies;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class MainController extends AbstractController
{
    /**
     * @Route("api/movies/upcoming", name="Upcoming")
     */
    public function index()
    {
      $movies = new Movies();
      $upcoming = $movies->getUpcoming();
      return new JsonResponse($upcoming);
    }
}
