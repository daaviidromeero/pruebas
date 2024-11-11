<?php
require_once 'pdoconfig.php';
$host = "db1";
$dbname = "database";
$username = "username";
$password = "password";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    echo "Conexión exitosa.";
} catch (PDOException $pe) {
    error_log("Error de conexión: " . $pe->getMessage()); // Registrar error
    die("No es posible conectar a la base de datos."); // Mensaje genérico
}
?>