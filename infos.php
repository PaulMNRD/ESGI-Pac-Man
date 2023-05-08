<?php
require('boot.php');
?>
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
          <a href="index.php">Jouer</a>
        </li>
        <li class="active">
          <a href="#">En savoir plus</a>
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
    <p>
      Ce projet a ete realise par Guilliam MORISSET, Paul MENARD et Maxime CHAPRON.
      <br><br>
      C'est un projet qui s'inscrit dans le cadre de notre formation a l'ESGI.
      <br><br>
      Ce projet a pour objectif de nous apprendre les points clef de la methodologie de projet.
      <br><br>
      Ainsi, nous avons pu mettre en place differentes methodes et outils pour faire fonctionner notre groupe et donc avancer sur ce projet.
      <br><br>
      Des outils tels que :
      <br><br>
      Une liste des risques avec leur criticite, leur probabilite et une solution pour les plus dangereuses.
      <br><br>
      Un cahier des charges qui definit le besoin de notre projet, avec la description des versions afin de prioriser ce qui est le plus important.
      <br><br>
      Ce GitHub qui nous permet d'avancer de maniere collaborative.
      <br><br>
      Un planner qui nous permet de repartir les tâches et d'observer ainsi l'avancement du projet.
      <br><br>
      Des methodes telles que :
      <br><br>
      La communication recurrente.
      <br><br>
      Des reunions de projets regulieres. (durant lesquelles on peut simplement faire un point d'avancement ou alors etablir la version suivante par exemple)
      <br><br>
      Et enfin, etablir les valeurs importantes au sein de notre groupe : indulgence, Curiosite et Altruisme.
    </p>

  </main>
</body>

</html>