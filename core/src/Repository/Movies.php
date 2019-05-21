<?php
namespace App\Repository;

use App\Repository\Config;

class Movies {
  const DISCOVER_URL = '/3/discover/movie';
  const QUERY_URL = '/3/search/movie';

  private $config;
  private $genre;
  private $poster;

  function __construct() {
    $this->config = new Config();
    $this->genre = new Genre();
    $this->poster = new Poster();
  }

  public function getUpcoming($page = 1, $query = '') {
    $endpoint = $this::DISCOVER_URL;
    
    if ($query != '') {
      $endpoint = $this::QUERY_URL;
    }

    $reqUrl = $this->buildRequestURL($endpoint, $page, $query);
    $responseData = json_decode($this->config->client->request('GET', $reqUrl)->getBody());
    $this->poster->appendPosters($responseData->results);
    $this->genre->appendGenres($responseData->results);
  
    return $responseData;
  }

  private function buildRequestURL($uri, $page = 1, $query) {
    $today = date('Y-m-d');
    $url = $uri . '?api_key=' . $this->config::API_KEY . '&language=en-US&page=' . $page
      . '&sort_by=popularity.desc&primary_release_date.gte=' . $today . '&primary_release_date.lte=2020-01-01&year=2019&query=' . $query;
    return $url;
  }
}
?>
