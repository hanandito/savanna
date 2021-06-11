<?php
$your_name=$_POST['your-name'];
$your_phone=$_POST['your-phone'];
$your_email=$_POST['your-email'];
$subject=$_POST['your-subject'];
$your_message=$_POST['your-message'];
$message=$_POST['message'];

$to=$email;

$subject = $subject." - Contact Form Okular";
$message="From: $your_name <$your_email><br />
Subject: $your_subject<br />
<br />
Message Body:<br />
<br />
Name                 : $your_name <br />
phone              : $your_phone <br />
Email Address        : $your_email <br />
Subject              : $subject <br />
Message              : $your_message <br />
<br />
<br />
-- <br />
This e-mail was sent from a contact form on Okular - PT Okular Kreasi Artaguna<br />".$message;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

// More headers
$headers .= 'From: <contact@okular.co.id>' . "\r\n";
$headers .= 'Cc: contact@okular.co.id' . "\r\n";
@mail($to,$subject,$message,$headers);
if(@mail)
{
header("Location:https://www.okular.co.id/contact.html");
}
?>