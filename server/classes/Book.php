<?php

require_once 'Connect.php';
require_once 'Product.php';

class Book extends Connect implements Product
{
    public function setGeneralInfo()
    {
        $this->sku = $_REQUEST['sku'];
        $this->name = $_REQUEST['name'];
        $this->price = $_REQUEST['price'];
    }
    public function setSpecificInfo()
    {
        $this->attribute_name = 'Weight';
        $this->attribute_value = $_REQUEST['weight'] . 'KG';
        $this->weight = $_REQUEST['weight'];
    }
}
