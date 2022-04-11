import Tache from './Tache';
import { useEffect } from 'react';
import { useState } from 'react';
import './Taches.scss';
import * as tacheModele from '../code/tache-modele';


export default function Taches({gererAjoutTache,utilisateur,taches,setTaches}) {
  const [tache, setTexte] = useState('');
// Lire les dossiers (de l'utilisateur connecté) dans Firestore
useEffect(
  () => tacheModele.lireTout(utilisateur.uid).then(
    lesTaches => setTaches(lesTaches)
  )
  , [utilisateur, setTaches]
);


function ajoutTache(event){
  event.preventDefault();
 setTexte("");
 gererAjoutTache(tache);

}



  return (
    <section className="Taches">
      <form onSubmit= {ajoutTache} >
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off" 
          onChange={(e) => setTexte(e.target.value)}
          id="tache"
          value={tache}
          
        />
      </form>
      
      <div className="liste-taches">
        {
          taches.map(
            tache => <Tache key={tache.id} {...tache}/>
          )
        }
      
      </div>
    </section>
  );
}