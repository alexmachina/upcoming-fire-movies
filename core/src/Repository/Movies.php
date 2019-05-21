<?php

namespace App\Repository;

use GuzzleHttp\Client;
use App\Repository\Config;
use Symfony\Contracts\Cache\ItemInterface;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

// TODO: Create file for Genre operations
class Genre {
  public $id;
  public $name;

  function __construct($payload) {
    $this->id = $payload->id;
    $this->name = $payload->name;
  }
}

class Movies {
  const BASE_URI = 'https://api.themoviedb.org';
  const API_KEY = '1f54bd990f1cdfb230adb312546d765d';
  
  const GENRES_URI = '/3/genre/movie/list';
  const UPCOMING_URI = '/3/discover/movie';

  private $client;
  private $config;

  function __construct() {
    $this->client = new Client([
        'base_uri' => $this::BASE_URI
      ]);

    $this->config = new Config();
  }

  public function getUpcoming($page = 1) {
    $uri = $this::UPCOMING_URI;
    $response = $this->client->request('GET', $this->buildURIParams($uri, $page));
    $data = json_decode($response->getBody());
    $data->results = $this->appendPosters($data->results);
    $this->appendGenres($data->results);
  
    return $data;
  }

  private function appendGenres($movies) {
    // Map the genres array
    // Map genre id to genres array
  
    foreach($movies as $movie) {

      $genres = array();
      foreach($movie->genre_ids as $genre_id) {
        $genre_name = $this->getGenreFromCache($genre_id);
        array_push($genres, $genre_name);
      }

      $movie->genres = $genres;
    }
  }

  private function getGenreFromCache($genre_id) {
    $cache = new FileSystemAdapter();
    $genres = $cache->get('genres', function (ItemInterface $item) {
      // Expire after 24 hours.
      $item->expiresAfter(2);

      $computedValue = $this->fetchGenres();
      return $computedValue;
    });

    $genre = $genres[$genre_id];
    return $genre;
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

  private function fetchGenres() {
    $url = $this::BASE_URI . $this::GENRES_URI . '?api_key=' . $this::API_KEY;
    $response = $this->client->request('GET', $url);

    $genres = json_decode($response->getBody())->genres;

    return $this->normalizeGenres($genres);
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
    return $uri . '?api_key=' . $this::API_KEY . '&language=en-US&page=' . $page
      . '&sort_by=popularity.desc&primary_release_date.gte=2019-05-05&primary_release_date.lte=2020-01-01&year=2019';
  }
}
?>
