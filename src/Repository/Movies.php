<?php

namespace App\Repository;

use GuzzleHttp\Client;

class Movies {
  const API_KEY = '1f54bd990f1cdfb230adb312546d765d';
  const BASE_URI = 'https://api.themoviedb.org';
  const UPCOMING_URI = '/3/movie/upcoming';

  private $client;

  function __construct() {
    $this->client = new Client([
        'base_uri' => $this::BASE_URI
      ]);
  }

  public function getUpcoming() {
    $uri = $this::UPCOMING_URI;
    $res = $this->client->request('GET', $this->buildURIParams($uri));
    $json = json_decode($res->getBody());

    return $json;
  }
  
  private function buildURIParams($uri) {
    return $uri . '?api_key=' . $this::API_KEY . '&language=en-US';
  }
}
?>
