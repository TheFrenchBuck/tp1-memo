import './Tache.scss';

export default function Tache({id, nom, date}) {
  return (
    <div className="Tache">
      Basculer
      <span className="texte">{nom}</span>
      <span className="date">{date}</span>
      Supprimer
    </div>
  );
}