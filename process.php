<?php
$data = json_decode(file_get_contents('php://input'), true);
$score = $data['score'];
echo "Le score envoyé est : " . $score;
?>