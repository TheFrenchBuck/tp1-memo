import './Appli.scss';
import logo from '../images/memo-logo.png';
import Controle from './Controle';
import Taches from './Taches';
import Accueil from './Accueil';
import Utilisateur from './Utilisateur';
import { useState, useEffect } from 'react';
import { observerEtatConnexion } from '../code/utilisateur-modele';

export default function Appli() {
  //état utilisateur
  const[utilisateur, setUtilisateur] = useState(null);
  // état des tache
  const [taches, setTaches] = useState([]);
  
  // surveiller l'état de la connexion
  useEffect(() => observerEtatConnexion(setUtilisateur),[]);
  return (
    // 1)  Si un utilisateur est connecté : il faut modifier  done
    utilisateur ?
      <div className="Appli">
        <header className="appli-entete">
          <img src={logo} className="appli-logo" alt="Memo" />
          <Utilisateur utilisateur={utilisateur} />
        </header>
        <Taches utilisateur={utilisateur} taches={taches} setDossiers={setTaches}/>
        <Controle utilisateur={utilisateur}/>
      </div>

    // 2) Par contre si aucun utilisateur n'est connecté, on affiche plutôt le composant suivant : 
    :
    <Accueil />
  );
}
