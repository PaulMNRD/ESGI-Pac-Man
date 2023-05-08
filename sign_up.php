<?php
require('boot.php');

// inscription : créer un compte
if (isset($_POST['pseudo']) && isset($_POST['email']) && isset($_POST['password'])) {

    function validateFields($data)
    {
        $errors = [];

        if (empty($data['pseudo'])) {
            $errors['error_pseudo'] = 'Le preudo est obligatoire';
        }

        if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['error_email'] = 'L\'email est obligatoire et doit être au format email';
        }

        if (empty($data['password'])) {
            $errors['error_password'] = 'Le mot de passe est obligatoire';
        }

        return $errors;
    }

    function isEmailUsed($email)
    {
        // retourner vrai si l'email est déjà utilisé, faux sinon
        $connexion = connect_db();
        $query = $connexion->prepare('SELECT COUNT(*) AS nb FROM player WHERE email = :email');
        $query->execute(['email' => $email]);
        $result = $query->fetch(PDO::FETCH_ASSOC);
        return $result['nb'] > 0;
    }

    $errors = validateFields($_POST);

    if (!empty($errors)) {
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
        $query = $connexion->prepare('INSERT INTO players (pseudo, email, password, score) VALUES (:pseudo, :email, :password, 0)');
        $hash = my_md5($_POST['password']);

        $query->execute([
            'pseudo' => $_POST['pseudo'],
            'email' => $_POST['email'],
            'password' => $hash,
        ]);

        // On ouvre une session car on vérifiera sur chaque page que le joueur est bien connecté
        $_SESSION['player'] = [
            'pseudo' => $_POST['pseudo'],
            'email' => $_POST['email'],
            'password' => $hash,
            'score' => 0,
        ];

        header('Location: index.php');
        return;
    }
}
