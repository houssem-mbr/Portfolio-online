<?php


function loadTasks()
{
	
	$file = fopen('todo.csv', 'a+');

	// Création d'une liste de tâches vide.
	$tasks = array();

	while(true)
	{
		// Lecture d'une ligne du fichier CSV, donc d'une tâche.
		$taskData = fgetcsv($file);

		// Est-ce qu'on est à la fin du fichier ?
		if($taskData == false)
		{
			
			break;
		}

		// Ajout de la tâche à la liste de tâches.
		array_push($tasks, $taskData);
	}

	fclose($file);

	return $tasks;
}

function saveTask(array $taskData)
{
	
	$file = fopen('todo.csv', 'a');

	
	fputcsv($file, $taskData);

	fclose($file);
}

function saveTasks(array $tasks)
{
	
	$file = fopen('todo.csv', 'w');

	
	foreach($tasks as $taskData)
	{
		
		fputcsv($file, $taskData);
	}

	fclose($file);
}