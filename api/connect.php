<?php
require 'vendor/autoload.php'; // Include Composer's autoloader

// MongoDB connection details
$host = "mongodb://atlas-sql-666746f47024744569010334-j87zu.a.query.mongodb.net/user?ssl=true&authSource=admin";
$client = new MongoDB\Client($host);

try {
    // Select a database and collection
    $db = $client->selectDatabase('user');
    $collection = $db->selectCollection('devspace');

    // Example query: Find all documents
    $result = $collection->find();
    foreach ($result as $document) {
        echo json_encode($document);
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
