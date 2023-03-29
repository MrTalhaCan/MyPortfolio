<?php
    session_start();
    $json = file_get_contents('./data.json');
    $json_data  =   json_decode($json);
    $photo; $name; $desc; $contact; $sizeW; $sizeH;
    if(isset($_POST["email"]) && isset($_POST["passw"]) && $_POST["email"] != '' && $_POST["email"] != null && $_POST["passw"] != '' && $_POST["passw"] != null){
        $email  =   $_POST["email"];
        $passw  =   $_POST["passw"];
        foreach($json_data->check as $values){
            if($values->email == $email && $values->password == $passw){
                $photo = $values->photo;
                $name = $values->name;
                $desc = $values->desc;
                $contact = $values->email;
                $sizeW  =   getimagesize($photo)[0];
                $sizeH  =   getimagesize($photo)[1];
                $_SESSION["giris"]  =   $values->email;
                if($sizeW == $sizeH){
                    $border_rad     =   "50%";
                }else{
                    $border_rad     =   "5px";
                }
            }else{
                continue;
            }
        }
        if(!($photo && $name && $desc && $contact)){
            header('location: ./index.php');
            exit();
        }
    }elseif($_SESSION["giris"]){
        foreach($json_data->check as $values){
            if($values->email == $_SESSION["giris"]){
                $photo = $values->photo;
                $name = $values->name;
                $desc = $values->desc;
                $contact = $values->email;
                $sizeW  =   getimagesize($photo)[0];
                $sizeH  =   getimagesize($photo)[1];
                if($sizeW == $sizeH){
                    $border_rad     =   "50%";
                }else{
                    $border_rad     =   "5px";
                }
            }else{
                continue;
            }
        }    
    }else{
        header('location: ./index.php');
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İçerdesiniz</title>
    <link rel="stylesheet" href="./page.css">
</head>
<body>
    <div class="container">
        <div class="social">
            <ul>
                <li><img src="./instagram.png" alt="ig"></li>
                <li><img src="./facebook.png" alt="fb"></li>
                <li><img src="./twitter.png" alt="twtr"></li>
                <li><img src="./whatsapp.png" alt="wp"></li>
            </ul>
        </div>
        <img class="thumb" src="<?= $photo ?>" alt="<?= $name ?>" style="border-radius: <?= $border_rad; ?>">
        <h2><?= $name ?></h2>
        <p><?= $desc ?></p>
        <div class="contact"><img width="30px" src="./mail.svg"><?= $contact ?></div>
        <a href="./index.php?sts=logout">logout</a>
    </div>
</body>
</html>