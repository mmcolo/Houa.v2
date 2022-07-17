import Dote from "../../Dote/Dote";

const DoteTree = (props) =>{
    return(
        <div className='box'>
            <div className="top ">
                <div className="left prj">
                    <h1>Projets</h1>
                    <div className="prj-box">
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                        <div className="prj-it"></div>
                    </div>
                </div>
            </div>

            <Dote active={props.active}/>
        </div>
    )
}

export default DoteTree;