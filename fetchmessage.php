<?php
session_start();
include('connect.php');

// Fetch all messages from the database
$sql = "SELECT cm.message, u.nick AS username, cm.created_at
        FROM chat_messages cm
        INNER JOIN users u ON cm.user_id = u.id
        ORDER BY cm.created_at ASC"; // Order by creation time for chronological order

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $messages = [];
    while ($row = $result->fetch_assoc()) {
        $messages[] = [
            'username' => $row['username'], // Using 'fname' as the username
            'message' => $row['message'],
            'created_at' => $row['created_at'] // Include timestamp
        ];
    }
    echo json_encode($messages); // Return messages as JSON
} else {
    echo json_encode([]); // Return empty array if no messages
}

$conn->close();
?>