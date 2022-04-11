import './Tache.scss';
import { formaterDate } from '../code/utilitaire';


export default function Tache({id, texte, date}) {
  return (
    <div className="Tache">
      Basculer
      <span className="texte">{texte}</span>
      <span className="date">{formaterDate(date.seconds)}</span>
      Supprimer
    </div>
  );
}