<?php

include 'config.php';
session_start();
$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
   header('location:login.php');
};

if(isset($_GET['logout'])){
   unset($user_id);
   session_destroy();
   header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <title>home</title>
   <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <!-- custom css file link  -->
    <link rel="stylesheet" href="extra/css/register.css">

</head>
<body>
<!-- effect wrap start-->
        <div class="effect-wrap">
            <img src="images/2.png" class="img1">
            <img src="images/2.png" class="img2">
        </div>

        <!-- effect wrap end-->
<div class="container">

   <div class="profile">
      <?php
         $select = mysqli_query($conn, "SELECT * FROM `user_form` WHERE id = '$user_id'") or die('query failed');
         if(mysqli_num_rows($select) > 0){
            $fetch = mysqli_fetch_assoc($select);
         }
         if($fetch['image'] == ''){
            echo '<img src="images/default-avatar.png">';
         }else{
            echo '<img src="uploaded_img/'.$fetch['image'].'">';
         }
      ?>
      <h3><?php echo $fetch['name']; ?></h3>
      <div class="flex-btn">
         <a href="update_profile.php" class="btn">update profile</a>
         <a href="home.php?logout=<?php echo $user_id; ?>" class="delete-btn">logout</a>
      </div>
      <p>new <a href="login.php">login</a> or <a href="register.php">register</a></p>
   </div>

</div>
<div class="day-night ">
   <i class="bx"></i>
</div>
  <script type="text/javascript" src="script.js"></script>      
</body>
</html>