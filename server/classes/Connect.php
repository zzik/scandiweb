<?php

header("Access-Control-Allow-Origin: *", 'Content-type: application/json');

abstract class Connect
{
  private $host = "localhost";
  private $user = "id21858412_root";
  private $password = 'Master123!"#$';
  private $dbName = "id21858412_products";

  protected function connect_service()
  {
    $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName;
    $pdo = new \PDO($dsn, $this->user, $this->password);
    $pdo->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
    return $pdo;
  }
  public function saveProduct()
  {
      $sql = "INSERT INTO product (sku, name, price, attribute_name, attribute_value) VALUES (?,?,?,?,?)";
      $stmt = $this->connect_service()->prepare($sql);
      $stmt->execute([$this->sku, $this->name, $this->price, $this->attribute_name, $this->attribute_value]);
  }
}
