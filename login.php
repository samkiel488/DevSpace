<?php
session_start();
include('connect.php'); // Database connection

$host='192.168.0.1';

if (isset($_POST['login'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id']; // Store user session
            header('Location: homepage.php'); // Redirect to homepage.php
        } else {
            header('Location: login.html?error=Invalid password'); // Redirect with error
        }
    } else {
        header('Location: login.html?error=User not found'); // Redirect with error
    }
}
?>
