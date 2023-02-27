<?php
	$email = $_POST['email'];
	$msg = $_POST['msg'];

	// Database connection
	$conn = new mysqli('localhost','root','','Need4u');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into data(email, msg) values(?, ?)");
		$stmt->bind_param("ss", $email, $msg);
		$execval = $stmt->execute();
		echo $execval;
		echo "Thank You For Contacting Us...";
		$stmt->close();
		$conn->close();
	}
?>