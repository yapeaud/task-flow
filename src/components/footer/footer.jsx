/* eslint-disable react/no-unescaped-entities */
// Ce composant est utilisé pour afficher le pied de page avec le nombre de tâches complétées.

import styles from './Footer.module.css'

export const Footer = ({ completedTasks }) => {
    // Si le nombre de tâches complétées est supérieur à zéro, affiche le message.
    if (completedTasks) {
        return (
            <footer>
                <code className={styles.footer}>
                    {/* Message affichant le nombre de tâches accomplies avec une gestion grammaticale pour le singulier/pluriel */}
                    Avec TaskFlox tu as éliminé {completedTasks} tâche
                    {completedTasks > 1 ? "s" : ""} !
                </code>
            </footer>
        );
    }

    // Si aucune tâche n'est complétée, le composant ne renvoie rien.
    return null;
};
