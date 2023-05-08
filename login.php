<?php
require('boot.php');

$connexion = connect_db();

$query = $connexion->prepare('SELECT * FROM players WHERE email = :email AND password = :password');
$hash = my_md5($_POST['password']);

$query->execute([
    'email' => $_POST['email_pseudo'],
    'password' => $hash,
]);

$result = $query->fetch(PDO::FETCH_ASSOC);

$query = $connexion->prepare('SELECT * FROM players WHERE pseudo = :pseudo AND password = :password');
$hash = my_md5($_POST['password']);

$query->execute([
    'pseudo' => $_POST['email_pseudo'],
    'password' => $hash,
]);
$result2 = $query->fetch(PDO::FETCH_ASSOC);

if (empty($result) && empty($result2)) {
    // Pas le droit de se connecter
    header('Location: identification.php?' . http_build_query([
        'error' => 'Impossible de se connecter avec ses informations de connexion',
        'email' => $_POST['email'],
    ]));
    return;
} else {
    // Bienvenue
    if (empty($result)) {
        $_SESSION['player'] = $result2;
    } else {
        $_SESSION['player'] = $result;
    }

    header('Location: index.php');
}
