<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use GuzzleHttp\Client;

function withParams($uri) {
  $params = '?api_key=1f54bd990f1cdfb230adb312546d765d&language=en';
  return $uri . $params;
}

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="main")
     */
    public function index()
    {
      $base_uri = 'https://api.themoviedb.org';
      $upcoming_uri = withParams('/3/movie/upcoming');

      $client = new Client([
        'base_uri' => $base_uri,
        'timeout' => 2.0,
      ]);

      $res = $client->request('GET', $upcoming_uri);
      dump(json_decode($res->getBody()));

        return $this->json(json_decode($res->getBody()));
    }
}
