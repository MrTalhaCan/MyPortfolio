<?php
    session_start();
    if(isset($_SESSION["giris"])){
        header('location: ./page.php');
    }
    if(isset($_GET["sts"])){
        $status     =   $_GET["sts"];
        if($status == "logout"){
            session_destroy();
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>
    <link rel="stylesheet" href="./css.css">
</head>
<body>
    <main>
        <div class="container">
            <div class="infs">
                <div class="img-contnr">
                    <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" width="200px">
                <div>
                <form action="./page.php" method="post">
                    <div id="floatContainer" class="float-container">
                        <label for="floatField1">e-mail</label>
                        <input id="floatField1" name="email" class="floatField" type="email" required>
                    </div>
                    <div id="floatContainer" class="float-container">
                        <label for="floatField2">password</label>
                        <input id="floatField2" name="passw" class="floatField" type="password" required>
                        <input type="submit">
                    </div>
                </form>
                <p><a href="./signup.php">Do you want to get an account?</a></p>
            </div>
        </div>
    </main>
    <script src="./js.js"></script>
</body>
</html>