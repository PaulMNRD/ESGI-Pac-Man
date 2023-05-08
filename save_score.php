<?php
require('boot.php');

$pseudo = $_SESSION['player']['pseudo'];
$score = $_GET['score'];

$pdo = connect_db();
$stmt = $pdo->prepare("SELECT * FROM players WHERE pseudo='$pseudo'");
$stmt->execute();

$result = $stmt->fetch(PDO::FETCH_ASSOC);

if ($result['score'] < $score) {
    $pdo = connect_db();
    $stmt = $pdo->prepare("UPDATE players SET score = '$score' WHERE pseudo = '$pseudo'");
    $stmt->execute();
}

header("Location: index.php");
