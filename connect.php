<?php
// database connection code
 $con = mysqli_connect('localhost', 'root', '','need4');

$con = mysqli_connect('localhost', 'root', '','need4');

// get the post records
$email = $_POST['email'];
$msg = $_POST['msg'];

// database insert SQL code
$sql = "INSERT INTO 'need4u' ('Email',  'Message') VALUES ('$email',  '$msg')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>