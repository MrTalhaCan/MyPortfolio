<?php
    if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["passw"]) && isset($_FILES["file"]) && isset($_POST["desc"])){
        $upName     =   $_POST["name"];
        $upEmail    =   $_POST["email"];
        $upPass     =   $_POST["passw"];
        $upFile     =   $_FILES["file"];
            $type = pathinfo($upFile["tmp_name"], PATHINFO_EXTENSION);
            $data = file_get_contents($upFile["tmp_name"]);
            $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
        $upDesc    =   $_POST["desc"];
        $jsonFile   =   file_get_contents('./data.json');
        $decToJson  =   json_decode($jsonFile);
        $newObj     =   $decToJson->check[count($decToJson->check)] = new stdClass();
        $newObj->name       =   $upName;
        $newObj->email      =   $upEmail;
        $newObj->password   =   $upPass;
        $newObj->photo      =   $base64;
        $newObj->desc       =   $upDesc;
        file_put_contents('./data.json', json_encode($decToJson));
        echo "<h1>Üyelik işleminiz <span style='color: rgb(11, 255, 52);'>Başarılı</span> oldu. Giriş sayfasına yönlendiriliyorsunuz.</h1>";
        header("Refresh:2; url= ./index.php");
    }else{
        echo "<h1>Lütfen form alanınıdaki tüm verileri doldurun.</h1>";
        header("Refresh:2; url= ./signup.php");
    }
?>
