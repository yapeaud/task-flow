/* eslint-disable react/no-unescaped-entities */
// Ce composant est utilisé pour afficher la liste des tâches.
import styles from './TaskList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHandshakeSimple, faHand } from '@fortawesome/free-solid-svg-icons';
import { TaskItem } from '../taskItem/taskItem';

// Définition du composant `TaskList` qui reçoit plusieurs props pour gérer et afficher les tâches.
export const TaskList = ({
    tasksList,           // Liste des tâches à afficher
    inCompletedTasks,    // Nombre de tâches non accomplies
    editTask,            // Fonction pour modifier une tâche
    deleteTask           // Fonction pour supprimer une tâche
}) => {

    // Utilise `map` pour transformer chaque tâche de `tasksList` en un composant `TaskItem`.
    const taskList = tasksList.map((task) => (
        <TaskItem
            key={task.id}        // Clé unique pour chaque tâche
            task={task}          // Objet tâche passé en prop
            editTask={editTask}  // Fonction de modification de la tâche
            deleteTask={deleteTask} // Fonction de suppression de la tâche
        />
    ));

    // Si la liste de tâches n'est pas vide, on affiche le message et la liste des tâches.
    if (taskList && taskList.length > 0) {
        return (
            <div className="box">
                <h2 className={styles.title}>
                    {inCompletedTasks > 0 && (
                        <>
                            {/* Affiche le nombre de tâches restantes */}
                            <FontAwesomeIcon icon={faFile} /> Il te reste encore <span className='important'>{inCompletedTasks}</span> tâches à accomplir !
                        </>
                    )}

                    {inCompletedTasks === 0 && (
                        <>
                            {/* Message de félicitations si toutes les tâches sont complétées */}
                            <FontAwesomeIcon icon={faHandshakeSimple} /> Génial, tu as accompli toutes tes tâches
                        </>
                    )}
                </h2>

                {/* Affiche la liste des tâches sous forme d'éléments de liste */}
                {tasksList && tasksList.length > 0 && (
                    <ul className={styles.container}>
                        {taskList}
                    </ul>
                )}
            </div>
        );
    }

    // Si `tasksList` est vide, on affiche un message indiquant qu'il n'y a aucune tâche.
    return (
        <div className='box'>
            <h2>
                {/* Message indiquant qu'il n'y a pas de tâches */}
                <FontAwesomeIcon icon={faHand} /> Salut, Tu n'as rien à faire ! Profite de ton temps libre !
            </h2>
        </div>
    )
}
