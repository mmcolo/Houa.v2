import './Dotes.css';
import Dote from '../../Dote/Dote';

const DoteOne = (props) =>{
    return(
        <div className='box'>
            <div className='top'>
                <div className='left'>
                    <h2>Accueil</h2>
                    <p>Je suis un développeur et concepteur graphique en freelance, spécialiser dans le web. Je conçois et réalise des sites web du cahier des charges à la mise en ligne, en passant par la conception graphique, le developpement et la mise en ligne. J’interviens seul ou en équipe. J’accepte de travailler également en partenariat avec des agences web et événementielles.</p>

                    <div className='btn-show'>Plus</div>
                </div>
                <div className='right'>
                    <div className='img'>
                    </div>
                </div>    
            </div>

            <Dote active={props.active}/>
        </div>
    )
}

export default DoteOne;