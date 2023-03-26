<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'finnparry3011@gmail.com';
  $subject = 'New message from your website';
  $body = "Name: $name\nEmail: $email\n\n$message";

  if (mail($to, $subject, $body)) {
    echo 'Thank you for your message!';
  } else {
    echo 'There was a problem sending your message.';
  }
}
?>