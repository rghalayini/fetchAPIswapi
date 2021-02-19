<?php

// We use environment variables instead when we run on heroku since they use that.
// It would be nice to use environment variables when developing locally as well
// (e.g. using a .env file) but that might be a bit too complex
// So if there is an environment variable LIVE and it set to true, we know we
// code running is deployed on heroku, and then we will use environment variables instead

$url='https://swapi.dev/api/people/1';


//Initializes a new cURL session
$curl=curl_init($url);

// Set the CURLOPT_RETURNTRANSFER option to true
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
// Set custom headers for RapidAPI Auth and Content-Type header
curl_setopt($curl, CURLOPT_HTTPHEADER, [
  'Content-Type: application/json'
]);
// Execute cURL request with all previous settings
$response = curl_exec($curl);
// Close cURL session
curl_close($curl);


$jsonData = json_decode($response);

$name = $jsonData->name;
$birth_year = $jsonData->birth_year;
$homeworld = $jsonData->homeworld;



$data = array(
  "name"=>$name,
  "bith_year"=>$birth_year,
  "homeworld"=>$homeworld
);

header('Content-Type: application/json');
echo json_encode($data);
?>