import './Tache.scss';
import { formaterDate } from '../code/utilitaire';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import IconButton from '@mui/material/IconButton';


export default function Tache({id, texte, date}) {
  return (
    <div className="Tache">
       <IconButton color='success'>
        <CheckCircleIcon/>
      </IconButton>
      
      <span className="texte">{texte}</span>
      <span className="date">{formaterDate(date.seconds)}</span>
      <IconButton color='error'>
        <DoDisturbOnIcon/>
      </IconButton>
    </div>
  );
}