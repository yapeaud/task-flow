// Ce composant est utilisé pour afficher l'en-tête de l'application
import styles from './Header.module.css';
import reactLogo from '../../assets/react.svg';

export const Header = () => {
    return (
        <div className={styles.container}>
            {/* Conteneur principal du titre avec le logo et le nom de l'application */}
            <div className={styles.titleContainer}>
                {/* Logo React avec une taille de 50x50 pixels */}
                <img src={reactLogo} alt="logo" width={50} height={50} />
                
                {/* Section contenant le nom et le slogan de l'application */}
                <div>
                    <h1>TaskFlow</h1>  {/* Nom principal de l'application */}
                    <div className="color-gray">
                        {/* Slogan de l'application en italique pour inspirer l'utilisateur */}
                        <code>liminez le chaos, suivez le flux.</code>
                    </div>
                </div>
            </div>
            
            {/* Affiche la version actuelle de l'application */}
            <code className="color-primary">
                v.1.0
            </code>
        </div>
    );
};
