<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="./css.css">
</head>
<body>
    <main>
        <div class="container">
            <div class="infs-signup">
                <div class="img-contnr">
                    <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg">
                </div>
                <form action="./addtojson.php" method="post" enctype="multipart/form-data">
                    <div id="floatContainer" class="float-container">
                        <label for="floatField1">name</label>
                        <input id="floatField1" name="name" class="floatField" type="text" required>
                    </div>
                    <div id="floatContainer" class="float-container">
                        <label for="floatField2">e-mail</label>
                        <input id="floatField2" name="email" class="floatField" type="email" required>
                    </div>
                    <div id="floatContainer" class="float-container">
                        <label for="floatField3">password</label>
                        <input id="floatField3" name="passw" class="floatField" type="password" required>
                    </div>
                    <div id="floatContainer" class="float-container">
                        <label for="floatField4">password</label>
                        <input id="floatField4" name="passw" class="floatField" type="password" required>
                    </div>
                    <div id="floatContainer" class="float-container">
                        <label for="floatField5">photograph</label>
                        <input id="floatField5" name="file" class="floatField" type="file" accept="image/*" required>
                    </div>
                    <div id="floatContainer" class="float-container">
                        <label for="floatField6">description</label>
                        <input id="floatField6" name="desc" class="floatField" type="textarea" required>
                        <span></span>
                        <input type="submit">
                    </div>
                </form>
                <p><a href="./index.php">Do you have an account?</a></p>
            </div>
        </div>
    </main>
    <script src="./js.js"></script>
    <script src="./match.js"></script>
</body>
</html>