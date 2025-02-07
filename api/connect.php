<?php
// Include Composer's autoloader for MongoDB
require 'vendor/autoload.php'; 

// MongoDB connection details
$host = "mongodb+srv://devspace:devspace@samkiel.ij9vc8f.mongodb.net/?retryWrites=true&w=majority&appName=SAMKIEL";

try {
    // Create a MongoDB client
    $client = new MongoDB\Client($host);

    // Select the database
    $db = $client->selectDatabase('user'); // Replace 'login' with your actual database name

    // Test the connection
    echo "Connected to MongoDB successfully!";
} catch (Exception $e) {
    // Handle connection errors
    echo "Failed to connect to MongoDB: " . $e->getMessage();
}
?>
