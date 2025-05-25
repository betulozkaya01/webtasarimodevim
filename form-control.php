<?php
if(isset($_POST["submit"])){
        $name = $_POST["name"];
        $password = $_POST["pswd"];

        $position = strpos($name, '@');
        $domain = substr($name, $position + 1);
        $number = substr($name, 0, $position);
        if ($domain == 'sakarya.edu.tr' && $number == $password) {
            header('Location: success-index.html');
            exit();
        }
        else{
            header("Location: fail-login.html");
            exit();
        }
    }

?>