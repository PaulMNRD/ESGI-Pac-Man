<?php
require('boot.php');

unset($_SESSION['player']);

header('Location: index.php');
