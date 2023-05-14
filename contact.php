<!DOCTYPE html>
<!-- Created By CodingLab - www.codinglabweb.com -->
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | Need4u</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="contact.css" class="rel">
</head>
<body>
    <div class="formBox">
        <h2>Contact Us</h2>
        <p>Our Team Will Contact You As soon as Possible</p>
        <form action="connect.php" method="POST">
            <div class="nameInp">
                <i class="fa fa-user icon"></i>
                <input type="text" placeholder="Full Name" name="name" id="name" required> 

            </div>
            <div class="mailInp">
                <i class="fa fa-envelope"></i>
                <input type="email" name="mail" id="mail" placeholder="Email" required>
            </div>
            <div class="phoneInp">
                <i class="fa-solid fa-phone"></i>
                <input type="number" name="phone" id="phone" placeholder="Phone" min="100000" max="9999999999" required>
            </div>
            <div class="queryInp">
                <textarea name="query" id="query" cols="30" rows="5"
                    placeholder="Any comment or your query"></textarea>
            </div>
            <div class="submitBtn">
                <button id="btn" onclick="notif()">Send</button>
            </div>
        </form>
        <p class="extra">You can also contact us at +918819934686</p>
    </div>
    
</body>
</html>