<?php
require('boot.php');

$pdo = connect_db();
$stmt = $pdo->prepare("SELECT pseudo, score FROM players ORDER BY score DESC LIMIT 10");
$stmt->execute();

$scores = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (!empty($_SESSION['player'])) {
  $pseudo = $_SESSION['player']['pseudo'];

  $stmt = $pdo->prepare("SELECT * FROM players WHERE pseudo='$pseudo'");
  $stmt->execute();

  $result = $stmt->fetch(PDO::FETCH_ASSOC);
}

$top = 0;
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
  <script src="assets/scripts/game.js" type="module" defer></script>
  <script src="assets/scripts/events.js" type="module" defer></script>
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
          <a href="infos.php">En savoir plus</a>
        </li>
        <?php if (empty($_SESSION['player'])) : ?>
          <li>
            <a id="login" href="identification.php">Se connecter</a>
          </li>
        <?php else : ?>
          <li>
            <a id="logout" href="logout.php">Se deconnecter</a>
          </li>
        <?php endif; ?>
      </ul>
    </nav>
  </header>
  <main class="container">
    <div class="items">
      <div>
        <div class="stats">
          Niveau&nbsp;
          <div id="level">
            0
          </div>
        </div>
        <div class="stats">
          Score&nbsp;
          <div id="score">
            0
          </div>
        </div>
        <div class="stats">
          Vies&nbsp;
          <div id="life">
            0
          </div>
        </div>
        <br>
        <div id="infosPoints">
          <br>
          Infos points :
          <br>
          <div class="infos_points">
            <div id="point"></div> &nbsp;-> +10 pts
          </div>
          <div class="infos_points">
            <div id="point" class="super"></div> &nbsp;-> +50 pts
          </div>
          <div class="infos_points">
            <img src="assets/img/ghost.png" alt="" width="30px"> &nbsp;-> +200/+400
          </div>
          /+800/+1600 pts
          <br><br>
        </div>
        <div id="hide">
          Afficher infos
        </div>
      </div>
      <a href="index.php">PRESS TO RESTART</a>
    </div>
    <div>
      <div id="score-display">100</div>
      <canvas class="jeu" id="map" width="448" height="496"></canvas>
      <div id="start" class="jeu">
        <img src="assets/img/start.png" width="458" height="200">
      </div>
      <div id="game-over" class="jeu">
        <a href="index.php"><img src="assets/img/game-over.png" width="458" height="200"></a>
      </div>
      <img id="under-map" src="assets/img/map.png" width="448" height="496">
    </div>
    <div id="lead">
      Leaderboard
      <table>
        <thead>
          <tr>
            <th>Top</th>
            <th>Pseudo</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($scores as $score) : $top++; ?>
            <tr>
              <td><?= $top; ?></td>
              <td><?= $score['pseudo']; ?></td>
              <td><?= $score['score']; ?></td>
            </tr>
          <?php endforeach; ?>
          <?php for ($i = $top + 1; $i <= 10; $i++) : ?>
            <tr>
              <td><?= $i; ?></td>
              <td></td>
              <td></td>
            </tr>
          <?php endfor; ?>
        </tbody>
      </table>
      <?php if (!empty($_SESSION['player'])) : ?>
        <br>
        <?php echo 'Bonjour ' . $pseudo ?>
        </br>
        <br>
        <?php echo 'Best score : ' . $result['score']; ?>
        </br>
      <?php endif; ?>
    </div>
  </main>
</body>

</html>