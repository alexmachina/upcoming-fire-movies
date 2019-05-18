<?php

namespace App\Repository;

class Config {
  public $configs;
  public $DEFAULT_POSTER_SIZE;
  public $POSTER_SIZES;
  private const configPath = 'resources/config.json';

  function __construct() {
    $configs = json_decode(file_get_contents($this::configPath, true));
    
    $this->configs = $configs;
    $this->POSTER_SIZES=$configs->images->poster_sizes;
    $this->DEFAULT_POSTER_SIZE=$configs->images->poster_sizes[3];
    $this->BASE_URL=$configs->images->secure_base_url;
  }
}

?>
