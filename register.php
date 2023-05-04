<?php
// permet l'ouverture d'une session pour pouvoir stocker par la suite les données dans $_SESSION
session_start();

// connection à la bdd
function connect_db() {
    return new PDO('mysql:host=localhost;dbname=pacman', 'root', 'root');
}
// fonction de hash du mot de passe
function my_md5($value) {
    return md5($value . 'PaCmAnEsTpLuScOmPlExEqUiLnYpArAiTmAlGrEqUiLaItPlUsDe40AnS!!');
}
/*
// authentification : se connecter
if (isset($_POST['email']) && isset($_POST['password'])) {

    $connexion = connect_db();
    $query = $connexion->prepare('SELECT * FROM players WHERE email = :email AND password = :password');
    $hash = my_md5($_POST['password']);

    $query->execute([
        'email' => $_POST['email'],
        'password' => $hash,
    ]);

    $result = $query->fetch(PDO::FETCH_ASSOC);

    if (empty($result)) {
        // Pas le droit de se connecter
        header('Location: identification.php?' . http_build_query([
            'error' => 'Impossible de se connecter avec ces informations de connexion',
            'email' => $_POST['email'],
        ]));
        return;

    } else {
        // On ouvre une session car on vérifiera sur chaque page que le joueur est bien connecté
        $_SESSION['player'] = [
            'email' => $result['email'],
            'password' => $result['password'],
        ];

        header('Location: index.php');
        return;
    }
}
*/
function hashPassword($password) {
    // retourner le hash du mot de passe
    return my_md5($password);
}

// inscription : créer un compte
if (isset($_POST['pseudo']) && isset($_POST['email']) && isset($_POST['password'])) {

    function validateFields($data) {
        $errors = [];

        if (empty($data['pseudo'])) {
            $errors['error_pseudo'] = 'Le preudo est obligatoire';
        }

        if (empty($data['email']) || ! filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['error_email'] = 'L\'email est obligatoire et doit être au format email';
        }

        if (empty($data['password'])) {
            $errors['error_password'] = 'Le mot de passe est obligatoire';
        }

        return $errors;
    }
/*
    function connectDb() {
        // se connecter à la base de données et renvoyer l'objet PDO
        return connect_db();
    }
*/


    function isEmailUsed($email) {
        // retourner vrai si l'email est déjà utilisé, faux sinon
        $connexion = connect_db();
        $query = $connexion->prepare('SELECT COUNT(*) AS nb FROM player WHERE email = :email');
        $query->execute(['email' => $email]);
        $result = $query->fetch(PDO::FETCH_ASSOC);
        return $result['nb'] > 0;
    }

    $errors = validateFields($_POST);

    if (! empty($errors)) {
        header('Location: signin.php?' . http_build_query([
            'errors' => $errors,
            'pseudo' => $_POST['pseudo'],
            'email' => $_POST['email'],
            'password' => $_POST['password'],
        ]));
        return;

    } else if (isEmailUsed($_POST['email'])) {
        header('Location: signin.php?' . http_build_query([
            'error' => 'Cet email est déjà utilisé',
            'pseudo' => $_POST['pseudo'],
            'email' => $_POST['email'],
            'password' => $_POST['password'],
        ]));
        return;

    } else {
        $connexion = connect_db();
        $query = $connexion->prepare('INSERT INTO player (pseudo, email, password) VALUES (:pseudo, :email, :password)');
        $hash = hashPassword($_POST['password']);

        $query->execute([
            'pseudo' => $_POST['pseudo'],
            'email' => $_POST['email'],
            'password' => $hash,
        ]);

        // On ouvre une session car on vérifiera sur chaque page que le joueur est bien connecté
        $_SESSION['player'] = [
            'email' => $_POST['email'],
            'password' => $hash,
        ];

        header('Location: index.php');
        return;
    }
}