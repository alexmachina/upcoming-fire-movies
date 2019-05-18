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
    $res = $this->client->request('GET', $this->buildURIParams($uri));
    $movies = json_decode($res->getBody());
    $poster = $this->fetchPoster($movies->results[0]);

    return $movies;
  }

  public function fetchPoster($movie) {
    $url = $this->buildPosterURL($movie->poster_path);
    dump($url);
    return $url;

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
