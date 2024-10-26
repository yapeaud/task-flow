// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from './TaskInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const TaskInput = ({ addTask }) => {
    // Déclaration d'un état local `taskTitle` pour stocker la valeur du champ de saisie.
    const [taskTitle, setTaskTitle] = useState("");

    // Fonction de gestion des changements dans le champ de saisie.
    const handleInputChange = (e) => {
        setTaskTitle(e.target.value); // Met à jour l'état `taskTitle` avec la valeur actuelle de l'input.
    };

    // Fonction de gestion de l'ajout d'une tâche lors de la soumission du formulaire.
    const handleAddTask = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire.
        
        // Si le champ `taskTitle` n'est pas vide (après avoir enlevé les espaces inutiles) :
        if (taskTitle.trim()) {
            addTask(taskTitle);   // Appelle la fonction `addTask` avec le titre de la tâche.
            setTaskTitle("");     // Réinitialise `taskTitle` à une chaîne vide après ajout.
        }
    };

    return (
        <div className={`box ${styles.element}`}>
            {/* Titre et icône pour indiquer à l'utilisateur d'ajouter une tâche */}
            <h2 className={styles.title}>
                <FontAwesomeIcon icon={faBullseye} /> Ajoute ta prochaine tâche
            </h2>
            
            {/* Formulaire de saisie de la tâche */}
            <form className={styles.container} onSubmit={handleAddTask}>
                <input 
                    type="text" 
                    className={styles.input}
                    placeholder="Indiquez un titre de tâche explicite."
                    onChange={handleInputChange} // Appelle `handleInputChange` à chaque changement de saisie.
                    value={taskTitle}            // Relie la valeur de `taskTitle` à l'input.
                />
                
                {/* Bouton pour soumettre le formulaire et ajouter une tâche */}
                <button className="button-primary" type="submit">Ajouter</button>
            </form>
        </div>
    );
};
