<?php

require_once 'Connect.php';
require_once 'Product.php';


class Furniture extends Connect implements Product
{
    public function setGeneralInfo()
    {
        $this->sku = $_REQUEST['sku'];
        $this->name = $_REQUEST['name'];
        $this->price = $_REQUEST['price'];
    }
    public function setSpecificInfo()
    {
        $this->attribute_name = 'Dimension';
        $this->attribute_value = $_REQUEST['height'] . 'x' . $_REQUEST['width'] . 'x' . $_REQUEST['length'];
        $this->height = $_REQUEST['height'];
        $this->width = $_REQUEST['width'];
        $this->length = $_REQUEST['length'];
    }
}
