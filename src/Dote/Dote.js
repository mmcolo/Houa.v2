import './Dote.css';
import { Link} from 'react-router-dom';

const Dote = (props) =>{
    //Ajout de la classe active dans la Point de navigation au centre en bas de la page.
    const updating = (index) =>{
        if(index === props.active){
            return "active"
        }
        else{
            return ""
        }
    }

    return(
    <div className="dote-box">
            <div className={`dote`}>
                <Link to='/home/DoteOne'>
                    <div className={`dote-link  ${updating(0)}`}></div>
                </Link>
            </div>
            <div className="dote">
                <Link to='/home/DoteTwo'>
                    <div className={`dote-link  ${updating(1)}`}></div>
                </Link>
            </div>
            <div className="dote">
                <Link to='/home/DoteTree'>
                    <div className={`dote-link  ${updating(2)}`}></div>
                </Link>
            </div>
    </div>)
}

export default Dote;