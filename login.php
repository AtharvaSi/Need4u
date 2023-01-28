<?php 
error_reporting(0);

$email = $_POST["email"];
$password = $_POST["password"];


$connection = mysqli_connect("localhost","root", "","login") or die ("connection failed");
$sql = "INSERT INTO need( email , password) VALUES ('{$email}',{$password}' ) ";

$result = mysqli_query($connection, $sql) or die ("query failed");

// header("location: http://localhost/vamtech/contact.php");  
header('location: index.html'); 
mysqli_close($connection)


?>


