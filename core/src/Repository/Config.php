<?php

namespace App\Repository;

use GuzzleHttp\Client;

class Config {
  public $configs;
  public $client;
  public $DEFAULT_POSTER_SIZE;
  public $POSTER_SIZES;

  const API_KEY = '1f54bd990f1cdfb230adb312546d765d';
  const BASE_URI = 'https://api.themoviedb.org';
  
  private const configPath = 'resources/config.json';

  function __construct() {
    $configs = json_decode(file_get_contents($this::configPath, true));

    $this->client = new Client([
      'base_uri' => $this::BASE_URI
    ]);

    $this->configs = $configs;
    $this->POSTER_SIZES=$configs->images->poster_sizes;
    $this->DEFAULT_POSTER_SIZE=$configs->images->poster_sizes[3];
    $this->BASE_URL=$configs->images->secure_base_url;
  }
}

?>
