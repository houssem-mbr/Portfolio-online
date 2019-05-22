<?php


include 'utilities.php';

// Récupération de la date du jour.
$now = date_create();

// Récupération de toutes les tâches.
$tasks = loadTasks();
// Chargement du template.
include 'index.phtml';