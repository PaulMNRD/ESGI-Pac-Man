<?php
require("boot.php");
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pac-Man</title>
    <link rel="icon" href="assets/img/pacman-life.png">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body>
    <header>
        <nav>
            <a href="index.php"><img src="assets/img/logo-pm.png" alt="" width="200px"></a>
            <ul>
                <li>
                    <a href="index.php">Jouer sans se connecter</a>
                </li>
            </ul>
        </nav>
    </header>
    <main class="container2">
        <h1>Authentification</h1>
        <?php if (empty($_GET['signup'])) : ?>
            <a href="identification.php?signup=true" class="switch_log_sign">Creer un compte</a>
            <h2>Connexion</h2>
            <?php if (isset($_GET['error'])) : ?>
                <div class="text-danger">
                    <?= $_GET['error'] ?>
                </div>
            <?php endif; ?>
            <br>
            <form method="POST" action="login.php">
                <label for="email">Email ou pseudo</label>&nbsp;
                <input name="email_pseudo" required value="<?= $_GET['email'] ?? '' ?>">&nbsp;
                <label for="password">Mot de passe</label>&nbsp;
                <input type="password" name="password" required>&nbsp;
                <br>
                <input class="submit" type="submit" value="Se connecter">
            </form>
        <?php else : ?>
            <a href="identification.php" class="switch_log_sign">J'ai deja un compte</a>
            <h2>Inscription</h2>
            <form method="POST" action="sign_up.php">
                <label for="pseudo">Pseudo</label>&nbsp;
                <input type="text" name="pseudo" maxlength="10" required>&nbsp;
                <label for="email">Email</label>&nbsp;
                <input type="email" name="email" required>&nbsp;
                <label for="password">Mot de passe</label>&nbsp;
                <input type="password" name="password" required>&nbsp;
                <input class="submit" type="submit" value="S'inscrire">
            </form>
        <?php endif; ?>
    </main>
</body>

</html>