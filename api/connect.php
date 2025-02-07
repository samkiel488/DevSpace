<?php
header('Content-Type: application/json');

try {
    $uri = "mongodb+srv://devspace:devspace@samkiel.ij9vc8f.mongodb.net/?retryWrites=true&w=majority&appName=SAMKIEL";
    echo json_encode([
        "status" => "success",
        "message" => "Testing MongoDB URI",
        "uri" => $uri
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>
