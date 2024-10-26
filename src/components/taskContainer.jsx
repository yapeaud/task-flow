// Importation des hooks et composants nécessaires depuis React et des fichiers locaux.
import { useEffect, useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Composant principal qui gère l'ensemble des fonctionnalités liées aux tâches.
export const TaskContainer = () => {

    // Initialisation d'un état local `tasksList` pour stocker la liste des tâches.
    const [tasksList, setTasksList] = useState([]);

    // Utilisation d'un effet pour charger la liste des tâches depuis le localStorage lors du montage du composant
    useEffect(() => {
        // Récupère la liste des tâches stockée sous la clé "tasksList" dans le localStorage
        const storedTasks = localStorage.getItem("tasksList");

        // Si une liste de tâches est trouvée, elle est analysée (JSON.parse) et assignée à l'état 'tasksList'
        if (storedTasks) {
            setTasksList(JSON.parse(storedTasks));
        }
    }, []);

    // Fonction pour sauvegarder la liste des tâches mise à jour dans le localStorage
    const saveTasksToLocalStorage = (tasks) => {
        // Convertit la liste des tâches en une chaîne JSON et la stocke sous la clé "tasksList"
        localStorage.setItem("tasksList", JSON.stringify(tasks));
    };

    // Fonction pour ajouter une nouvelle tâche dans la liste `tasksList`.
    const addTask = (title) => {
        const newTask = {
            id: tasksList.length + 1,   // Génère un ID unique basé sur la longueur actuelle de la liste.
            title: title,               // Titre de la tâche, passé en paramètre.
            completed: false,           // Initialise l'état de la tâche comme "non terminée".
        };
        const updatedTasks = [...tasksList, newTask];// Ajoute une nouvelle tâche à la liste des tâches existante
        setTasksList(updatedTasks);  // Met à jour la liste avec la nouvelle tâche ajoutée.
        saveTasksToLocalStorage(updatedTasks);// Sauvegarde la liste des tâches mise à jour dans le localStorage pour persister les modifications
    };

    // Fonction pour modifier l'état de complétion d'une tâche spécifique
    const editTask = (id, completedValue) => {
        // Crée une nouvelle liste de tâches en mettant à jour uniquement la tâche correspondant à l'ID fourni
        const updatedTasks = tasksList.map((task) =>
            // Si l'ID de la tâche correspond à celui passé en paramètre, met à jour la valeur 'completed'
            task.id === id ? { ...task, completed: completedValue } : task
        );

        setTasksList(updatedTasks); // Met à jour l'état 'tasksList' avec la liste des tâches modifiée

        saveTasksToLocalStorage(updatedTasks);// Sauvegarde la liste des tâches mise à jour dans le localStorage pour persister les modifications
    };


    // Fonction pour supprimer une tâche de la liste selon son ID.
    const deleteTask = (id) => {
        const updatedTasks = tasksList.filter((task) => task.id !== id);
        setTasksList(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);// Sauvegarde la liste des tâches mise à jour dans le localStorage pour persister les modifications
    };

    // Fonction pour calculer et retourner le nombre de tâches terminées et non terminées.
    const getTaskCounts = () => {
        const completedTasks = tasksList.filter((task) => task.completed).length;  // Compte les tâches terminées.
        const inCompletedTasks = tasksList.length - completedTasks;               // Calcule les tâches restantes.
        return {
            completedTasks,
            inCompletedTasks,
        };
    };

    // Déstructure les valeurs renvoyées par `getTaskCounts`.
    const { completedTasks, inCompletedTasks } = getTaskCounts();

    // Rendu de l'interface utilisateur avec les composants Header, TaskInput, TaskList, et Footer.
    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList
                tasksList={tasksList}
                editTask={editTask}
                deleteTask={deleteTask}
                inCompletedTasks={inCompletedTasks}
            />
            <Footer completedTasks={completedTasks} />
        </main>
    );
};
