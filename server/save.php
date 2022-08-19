<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

require_once 'classes/Furniture.php';
require_once 'classes/Book.php';
require_once 'classes/Dvd.php';


$productType = $_REQUEST['productType'];
$instance = new ${'productType'}();

$instance->setGeneralInfo();
$instance->setSpecificInfo();
$instance->saveProduct();
