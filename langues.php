<?php

session_start();

if (!isset($_SESSION['lang']))
    $_SESSION['lang'] = "fr";
else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
    if ($_GET['lang'] == "fr")
        $_SESSION['lang'] = "fr";
    else if ($_GET['lang'] == "en")
        $_SESSION['lang'] = "en";
    else if ($_GET['lang'] == "de")
        $_SESSION['lang'] = "de";
}
require_once $_SESSION['lang'] . ".php";