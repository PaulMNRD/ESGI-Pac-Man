<?php
require('index.php');
echo scorePhp;
function save_score() {
    $pdo = connect_db();
    $stmt = $pdo->prepare("UPDATE joueur SET score = :score WHERE pseudo = :pseudo");
    $stmt->bindValue(':score', $_POST['score'], PDO::PARAM_INT);
    $stmt->execute();
}

function connect_db() {
    return new PDO('mysql:host=localhost;dbname=pacman', 'root', 'root');
}

if (isset($_POST['score'])) {
    save_score();
    $response = array('status' => 'success');
} else {
    $response = array('status' => 'error', 'message' => 'Le score n\'a pas été fourni.');
}

header('Content-Type: application/json');
echo json_encode($response);
?>