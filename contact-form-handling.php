<?php
    $name = $_POST ['name'];
    $email = $_POST ['email'];
    $message = $_POST ['message'];

    $to = "mjdy@707.com";
    $body = "";
    $body .= "From: ".$name. "\r\n";
    $body .= "Email: ".$email. "\r\n";
    $body .= "Message: ".$message. "\r\n";

    mail($to,$name,$body);
    header("Location: index.html");
?>