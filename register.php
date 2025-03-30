<?php
include('connect.php'); // Database connection

if (isset($_POST['register'])) {
    $fname = mysqli_real_escape_string($conn, $_POST['fName']);
    $lname = mysqli_real_escape_string($conn, $_POST['lName']);
    $nick = mysqli_real_escape_string($conn, $_POST['nick']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure password hash
    $whatsapp = mysqli_real_escape_string($conn, $_POST['wa']); // WhatsApp number

    // Check if email already exists
    $checkEmailQuery = "SELECT id FROM users WHERE email = ?";
    $stmt = $conn->prepare($checkEmailQuery);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // Email already exists
        $error = "Email already registered. Please use a different email.";
        header('Location: register.html?error=' . urlencode($error));
    } else {
        // Insert the user into the database
        $insertQuery = "INSERT INTO users (fname, lname, nick, email, password, whatsapp_number) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("ssssss", $fname, $lname, $nick, $email, $password, $whatsapp);

        if ($stmt->execute()) {
            header('Location: login.html');
        } else {
            $error = "Error: Unable to register user.";
            header('Location: register.html?error=' . urlencode($error));
        }
    }

    $stmt->close(); // Close the statement
}
?>
