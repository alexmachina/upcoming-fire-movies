<?php
namespace App\Repository;

use Symfony\Contracts\Cache\ItemInterface;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use App\Repository\Config;
use GuzzleHttp\Client;

class GenreModel {

  public $id;
  public $name;

  function __construct($payload) {
    $this->id = $payload->id;
    $this->name = $payload->name;
  }
}

class Genre {
  private $config;
  private $client;

  function __construct() {
    $this->config = new Config();
  }

  const GENRES_URI = '/3/genre/movie/list';

  public function appendGenres($movies) {
    foreach($movies as $movie) {
      $this->appendGenre($movie);
    }
  }

  public function appendGenre($movie) {
    $genres = array();

   foreach($movie->genre_ids as $genre_id) {
      $genre_name = $this->getGenreFromCache($genre_id);
      array_push($genres, $genre_name);
    }

    $movie->genres = $genres;
  }

  public function appendDetailGenres($movie) {
    $genres = array();

    foreach($movie->genres as $genre) {
      $genre_name = $this->getGenreFromCache($genre->id);
      array_push($genres, $genre_name);
    }

    $movie->genres = $genres;

  }

  private function fetchGenres() {
    $url = $this->config::BASE_URI . $this::GENRES_URI . '?api_key=' . $this->config::API_KEY . '&language=en-US';
    $response = $this->config->client->request('GET', $url);

    $genres = json_decode($response->getBody())->genres;

    return $this->normalizeGenres($genres);
  }

  private function normalizeGenres($genres) {
    $byId = function($genrePayload) {
      $genre = new Genre($genrePayload);

      return array($genre->id => $genre);
    };
    $normalized = array();

    foreach($genres as $genre) {
      $normalized[$genre->id] = $genre; 
    }

    return $normalized;
  }

  private function getGenreFromCache($genre_id) {
    $cache = new FileSystemAdapter();
    $genres = $cache->get('genres', function (ItemInterface $item) {
      // Expire after 24 hours.
      $item->expiresAfter(3600);

      $computedValue = $this->fetchGenres();
      return $computedValue;
    });

    $genre = $genres[$genre_id];
    return $genre;
  }
}
?>
