<?php
//  permet l'ouverture d'une session pour pouvoir stocker par la suite les données dans $_SESSION
session_start();
//  connection à la bdd
function connect_db() {
    return new PDO('mysql:host=localhost;dbname=pacman', 'root', 'root');
}
//  fonction de hash du mot de passe
function my_md5($value) {
    return md5($value . 'PaCmAnEsTpLuScOmPlExEqUiLnYpArAiTmAlGrEqUiLaItPlUsDe40AnS!!');
}
//authentification : se connecter ================================>A VOIR SI L ON MET UN NOM DE JOUEUR
$connexion = connect_db();
$query = $connexion->prepare('SELECT * FROM player WHERE email = :email AND password = :password');
$hash = my_md5($_POST['password']);

$query->execute([
    'email' => $_POST['email'],
    'password' => $hash,
]);

$result = $query->fetch(PDO::FETCH_ASSOC);

if (empty($result)) {

    // Pas le droit de se connecter
    header('Location: signin.php?' . http_build_query([
        'error' => 'Impossible de se connecter avec ses informations de connexion',
        'email' => $_POST['email'],
    ]));
    return;

} else {
    // Bienvenue
    
    $_SESSION['pseudo'] = $result['pseudo'];
    $_SESSION['score'] = $result['score'];
    header('Location: index.php');
}

















//  fonction d'authentification de l'utilisateur, à voir si ça fonctionne car il faut que le joueur puisse jouer sans s'identifier
/*function check_auth() {
    
    // On va regarder si on a une case user dans la session

    if (!empty($_SESSION['user'])) {
        
        // On vérifie que ca correspond à un user dans la db

        $connexion = connect_db();
        $query = $connexion->prepare('SELECT * FROM users WHERE email = :email AND password = :password');
        $query->execute([
            'email' => $_SESSION['user']['email'],
            'password' => $_SESSION['user']['password'],
        ]);

        $result = $query->fetch(PDO::FETCH_ASSOC);

        if (empty($result)) {
            header('Location: /admin/products/index.php');
            return;
        }

    } else {
        // Sinon, on redirige vers login
        header('Location: /admin/login.php');
        return;
    }
*/