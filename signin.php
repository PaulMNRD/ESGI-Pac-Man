<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pac-Man</title>
    <!--<link rel="icon" href="assets/img/pacman-life.png">
    <link rel="stylesheet" href="assets/css/styles.css">-->
</head>
<body>
	<h1>Authentification</h1>
        <h2>Connexion</h2>
        <form method="POST" action="login.php">
            <label for="email">Email :</label>
            <input type="email" name="email"required value="<?= $_GET['email'] ?? '' ?>">
            <?php if( isset($_GET['error']) ): ?>
                <div class="text-danger">
                    <?= $_GET['error'] ?>
                </div>
            <?php endif; ?>
            <br>
            <label for="password">Mot de passe :</label>
            <input type="password" name="password" required>
            <br>
            <input type="submit" value="Se connecter">
        </form>

        <h2>Inscription</h2>
        <form method="POST" action="register.php">
            <label for="pseudo">Pseudo :</label>
            <input type="text" name="pseudo" required>
            <br>            
            <label for="email">Email :</label>
            <input type="email" name="email" required>
            <br>
            <label for="password">Mot de passe :</label>
            <input type="password" name="password" required>
            <br>
            <input type="submit" value="S'inscrire">
        </form>
</body>
</html>