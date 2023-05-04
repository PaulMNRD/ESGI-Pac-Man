<?php
function get_top_scores() {
    $pdo = connect_db();
    $stmt = $pdo->prepare("SELECT pseudo, score FROM player ORDER BY score DESC LIMIT 10");
    $stmt->execute();
    $scores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $scores;
}

function connect_db() {
    return new PDO('mysql:host=localhost;dbname=pacman', 'root', 'root');
}

$scores = get_top_scores();
?>