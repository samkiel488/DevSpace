<?php

$host = "localhost";  // Database server (no change needed)
$user = "root";       // Default MySQL username for XAMPP
$pass = "";           // Default MySQL password for XAMPP is empty
$db = "login";        // Your previous database name

$conn = new mysqli($host, $user, $pass, $db);

// Check if the connection was successful
if ($conn->connect_error) {
    echo "Failed to connect to the database: " . $conn->connect_error;
} else {
    // Connection successful, you can proceed with your queries
}
?>
