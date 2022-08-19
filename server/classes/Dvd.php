<?php

require_once 'Connect.php';
require_once 'Product.php';

class Dvd extends Connect implements Product
{
    public function setGeneralInfo()
    {
        $this->sku = $_REQUEST['sku'];
        $this->name = $_REQUEST['name'];
        $this->price = $_REQUEST['price'];
    }
    public function setSpecificInfo()
    {
        $this->attribute_name = 'Size';
        $this->attribute_value = $_REQUEST['size'] . ' MB';
    }
}
