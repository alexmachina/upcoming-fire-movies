<?php

namespace App\Repository;

use App\Repository\Config;

class Poster {
  private $config;

  function __construct() {
    $this->config = new Config();
  }

  public function appendPosters($movies) {
    $movies_with_poster = array();

    foreach($movies as $movie) {
      $movie->poster = $this->fetchPoster($movie);
    }
  }

  private function fetchPoster($movie) {
    $url = $this->buildPosterURL($movie->poster_path);
    return $url;
  }

  private function buildPosterURL($poster_path) {
    $config = $this->config;
    return $config->BASE_URL . $config->DEFAULT_POSTER_SIZE . $poster_path;
  }
}
?>
