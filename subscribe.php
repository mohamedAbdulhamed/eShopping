<?php
    $email = $_POST ['email'];
    $subject = "subscribtion";

    $to = "mjdy@707.com";
    $body = "";
    $body .= "Email: ".$email. "\r\n";

    mail($to,$subject,$body);
    header("Location: index.html");
?>