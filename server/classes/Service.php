<?php

require_once 'classes/Connect.php';

class Service extends Connect
{
    public function getProductList()
    {
        $sql = "SELECT * FROM product";
        $stmt = $this->connect_service()->query($sql);
        $result = $stmt->fetchAll();
        echo json_encode($result);
    }
    public function getProductExists()
    {
        $payload = $_GET['sku'];
        $sql = "SELECT * FROM product WHERE sku = ?";
        $stmt = $this->connect_service()->prepare($sql);
        $stmt->execute([$payload]);
        $row = $stmt->fetch();
        echo json_encode($row);
    }
    public function deleteRecord()
    {
        $payload = $_GET['sku'];
        $sql = "DELETE FROM product WHERE sku = ?";
        $stmt = $this->connect_service()->prepare($sql);
        $stmt->execute([$payload]);
    }
}
