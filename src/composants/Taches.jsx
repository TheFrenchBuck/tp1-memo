import Tache from './Tache';
import { useEffect } from 'react';
import './Taches.scss';
import * as tacheModele from '../code/tache-modele';

export default function Taches({utilisateur,taches,setTaches}) {
// Lire les dossiers (de l'utilisateur connecté) dans Firestore
useEffect(
  () => tacheModele.lireTout(utilisateur.uid).then(
    lesTaches => setTaches(lesTaches)
  )
  , [utilisateur, setTaches]
);
  return (
    <section className="Taches">
      <form onSubmit={e => alert('À compléter')}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
        />
      </form>
      <ul className="liste-taches">
      {
        taches.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          tache =>  <li key={tache.id}><Tache {...tache} /></li>
        )
      }
        
      </ul>
    </section>
  );
}