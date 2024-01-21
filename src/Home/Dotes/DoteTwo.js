import Dote from "../../Dote/Dote";


const DoteTwo = (props) =>{
    return(
        <div className='box'>

            <div className='top'>
                <div className='left'>:
                    <h1>Services</h1>
                    <p className="serv-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="tech">
                        <div className="it-tech">
                            <img src="https://via.placeholder.com/300"/>
                        </div>
                        <div className="it-tech">
                            <img src="https://via.placeholder.com/300"/>
                        </div>
                        <div className="it-tech">
                            <img src="https://via.placeholder.com/300"/>
                        </div>
                        <div className="it-tech">
                            <img src="https://via.placeholder.com/300"/>
                        </div>
                        <div className="it-tech">
                            <img src="https://via.placeholder.com/300"/>
                        </div>
                    </div>
                </div>
                <div className='right srv'>
                    <div className="card">
                        <h3>Dev</h3>
                        <p>Je developpe vorte application web de bout en bout. A fin de facilité vorte activité et vous créer un identité numerique qui vous coresponds </p>
                        <img src="https://via.placeholder.com/80" className="profil"/>
                        <ul className="ul">
                            <li>Site vitrine</li>
                            <li>Application web</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Design</h3>
                        <p>Je popose des services de conception graphique personnalise. Pour les different élément listé ci-dessous: </p>
                        <img src="https://via.placeholder.com/80" className="profil"/>
                        <ul className="ul">
                            <li>Carde de visite</li>
                            <li>Affiche événementielles</li>
                            <li>Maquette de site</li>
                        </ul>
                    </div>
                </div>    
            </div>
            
            <Dote active={props.active}/>
        </div>
    )
}

export default DoteTwo;