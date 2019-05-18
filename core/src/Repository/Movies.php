<?php

namespace App\Repository;

use GuzzleHttp\Client;
use App\Repository\Config;

class Movies {
  const API_KEY = '1f54bd990f1cdfb230adb312546d765d';
  const BASE_URI = 'https://api.themoviedb.org';
  const UPCOMING_URI = '/3/movie/upcoming';

  private $client;
  private $config;

  function __construct() {
    $this->client = new Client([
        'base_uri' => $this::BASE_URI
      ]);

    $this->config = new Config();
  }

  public function getUpcoming() {
    $uri = $this::UPCOMING_URI;
    $response = $this->client->request('GET', $this->buildURIParams($uri));
    $data = json_decode($response->getBody());
    $data->results = $this->appendPosters($data->results);
  
    return $data;
  }

  private function fetchPoster($movie) {
    $url = $this->buildPosterURL($movie->poster_path);
    return $url;
  }

  private function appendPosters($movies) {
    $movies_with_poster = array();

    foreach($movies as $movie) {
      $movie->poster = $this->fetchPoster($movie);
      array_push($movies_with_poster, $movie);
    }

    return $movies_with_poster;
  }

  private function buildPosterURL($poster_path) {
    $config = $this->config;
    return $config->BASE_URL . $config->DEFAULT_POSTER_SIZE . $poster_path;
  }
  
  private function buildURIParams($uri, $page = 1) {
    return $uri . '?api_key=' . $this::API_KEY . '&language=en-US&page=' . $page;
  }
}
?>
