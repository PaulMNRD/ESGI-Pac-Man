<?php
require_once 'leaderboard.php';
?>

<html>
<head>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Pac-Man</title>
  <link rel="icon" href="assets/img/pacman-life.png">
	<link rel="stylesheet" href="assets/css/styles.css">
  <script src="assets/scripts/share.js" type="module" defer></script>
  <script src="assets/scripts/entity.js" type="module"></script>
  <script src="assets/scripts/ghost.js" type="module"></script>
  <script src="assets/scripts/pac-man.js" type="module"></script>
  <script src="assets/scripts/map.js" type="module"></script>
  <script src="assets/scripts/game.js" type="module" defer></script>
  <script src="assets/scripts/events.js" type="module" defer></script>
  <?php
    session_start();
  ?>
</head>
<body>
  <header>
    <nav>
      <a href="index.php"><img src="assets/img/logo-pm.png" alt="" width="200px"></a>
      <ul>
        <li class="active">
            <a href="#">Jouer</a>
        </li>
        <li>
            <a href="infos.html">En savoir plus</a>
        </li>
        <li>
          <a id="login" href="signin.php">Se connecter</a>
        </li>
      </ul>  
    </nav>
  </header>
  <main class="container">
    <div class="items">
      <div>
        <div class="stats">
          Score: 
          <div id="score">
            0
          </div>
        </div>
        <div class="stats">
          Vies:
          <div id="life">
            <img src="assets/img/pacman-life.png" alt="" width="20px">
            <img src="assets/img/pacman-life.png" alt="" width="20px">
            <img src="assets/img/pacman-life.png" alt="" width="20px">
          </div>
        </div>
      </div>
      <a href="index.php">PRESS TO RESTART</a>
    </div>
    <div>
      <canvas class="jeu"  id="map" width="448" height="496"></canvas>
      <div id="start" class="jeu" >
        <img src="assets/img/start.png" width="458" height="200">
      </div>
      <div id="game-over" class="jeu" >
        <img src="assets/img/game-over.png" width="458" height="200">
      </div>
      <img id="under-map" src="assets/img/map.png" width="448" height="496">
    </div>
    <div id="lead">
      <br>
        <?php echo 'Bonjour '. $_SESSION['pseudo']; ?>
      </br>
      <br>
        <?php echo 'Votre meilleur score : '. $_SESSION['score']; ?>
      </br>
      <img src="assets/img/pacman.png" alt="" width="280px">
      <table>
        <thead>
            <tr>
                <th>Pseudo</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($scores as $score): ?>
                <tr>
                    <td><?php echo $score['pseudo']; ?></td>
                    <td><?php echo $score['score']; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
      </table>

    </div>
  </main>
</body>
</html>