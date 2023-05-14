<?php
error_reporting(0);


$host = "localhost";
$username = "root";
$password = "";
$database = "user_db";

// create a new MySQLi object
$conn = mysqli_connect($host, $username, $password, $database);


$name = $_POST["name"];
$mail = $_POST["mail"];
$phone = $_POST["phone"];
$query = $_POST["query"];


$query = mysqli_query($conn, "INSERT INTO data(`name`,`mail`,`phone`,`query`)VALUES('$name','$mail','$phone','$query')");







?>