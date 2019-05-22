<?php
include 'utilities.php';
function removeTasks(array $allTasks, array $indexes)
{
    // Création d'un nouveau tableau de tâches.
	$tasks = array();

	// Parcours de la liste de tâches spécifiées.
	foreach($allTasks as $index => $taskData)
    {
        
        if(in_array($index, $indexes) == false)
        {
            
            array_push($tasks, $taskData);
        }
    }

	return $tasks;
}
if(array_key_exists('indexes', $_POST) == true)
{
    // Chargement de toutes les tâches existantes.
    $allTasks = loadTasks();

   
    $tasks = removeTasks($allTasks, $_POST['indexes']);

    // Sauvegarde de la nouvelle liste de tâches (les tâches qui n'ont pas été cochées).
    saveTasks($tasks);
}

header('Location:index.php');
exit();