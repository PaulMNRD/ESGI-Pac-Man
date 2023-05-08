<?php

//  permet l'ouverture d'une session pour pouvoir stocker par la suite les données dans $_SESSION
session_start();

//  connection à la bdd
function connect_db()
{
    return new PDO('mysql:host=localhost;dbname=pacman', 'root', '');
}

//  fonction de hash du mot de passe
function my_md5($value)
{
    return md5('PaCmAnEsTpLuScOmPlExEqUiLnY' . $value . 'pArAiTmAlGrEqUiLaItPlUsDe40AnS!!');
}
