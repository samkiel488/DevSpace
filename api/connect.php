<?php
header('Content-Type: application/json'); // Set the response type to JSON

$host = "mongodb+srv://devspace:devspace@samkiel.ij9vc8f.mongodb.net/?retryWrites=true&w=majority&appName=SAMKIEL"; // Your MongoDB URI

try {
    // Create a MongoDB client and establish a connection
    require 'vendor/autoload.php'; // Load MongoDB PHP library
    $client = new MongoDB\Client($host);
    
    // Test connection by selecting a database (no operation needed)
    $db = $client->selectDatabase('user'); // Replace 'test' with your database name if needed

    // Respond with a success message
    echo json_encode([
        "status" => "success",
        "message" => "Connected to the database successfully!"
    ]);
} catch (Exception $e) {
    // Respond with an error message if the connection fails
    echo json_encode([
        "status" => "error",
        "message" => "Failed to connect to the database",
        "error" => $e->getMessage()
    ]);
}
?>
