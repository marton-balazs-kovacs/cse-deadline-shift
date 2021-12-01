<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//An example JSON string.
  $jsonString = file_get_contents('php://input');

  //Decode the JSON and convert it into an associative array.

  $jsonDecoded = json_decode($jsonString, true);
  $data = $jsonDecoded["data"];
  $jsonEncoded = json_encode($data, true);

  $jsonFileName = 'data/' . $jsonDecoded["metadata"]["id"] . '.json';
  file_put_contents($jsonFileName, $jsonEncoded);


  http_response_code(200);
  }


?>
