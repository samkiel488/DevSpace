<?php
session_start();
require 'connect.php'; // Ensure this file connects to your database

if (!isset($_SESSION['user_id']) || empty($_SESSION['user_id'])) {
    die(json_encode(["error" => "You must be logged in to send a message."]));
}

$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($message)) {
    die(json_encode(["error" => "Message cannot be empty."]));
}

// Get the current timestamp
$created_at = date('Y-m-d H:i:s');

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO chat_messages (message, user_id, created_at) VALUES (?, ?, ?)");
if ($stmt === false) {
    die(json_encode(["error" => "Prepare failed: " . $conn->error]));
}

// Bind parameters and execute the statement
$stmt->bind_param("sis", $message, $_SESSION['user_id'], $created_at);

if ($stmt->execute()) {
    echo "Message sent successfully.";
} else {
    echo json_encode(["error" => "Error sending message: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>