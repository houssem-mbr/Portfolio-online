<?php


include 'utilities.php';
function addTask($title, $description, $date, $priority)
{
    if(empty($description) == true)
    {
        $description = 'Tâche sans description';
    }

	// Création du tableau contenant la tâche.
	$taskData =
	[
		$title,
		$description,
		$date,
		$priority
	];

	// Enregistrement du tableau contenant la tâche.
	saveTask($taskData);
}

if(empty($_POST['titre']) == false) // ou if($_POST['title'] != '')
{
    // Récupération des données de formulaire.
    $description = $_POST['tache'];
    $date        = $_POST['annee'].'-'.$_POST['mois'].'-'.$_POST['jour'];
    $priority    = $_POST['choix'];
    $title       = $_POST['titre'];

  
    addTask($title, $description, $date, $priority);
}


header('Location:index.php');
exit();