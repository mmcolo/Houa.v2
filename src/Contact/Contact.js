import "./Contact.css";
import NavBar from "../Nav-bar/Nav-bar";
import { useState } from 'react';

const Contact=()=>{
    let activeNav = 2;

    const [sName, setName ] = useState("");
    const [sValue, setMsg ] = useState("");


    //Function appeler a chaque fois que la valeur de l'input change.
    const handleChange = (event) =>{
        let name = event.currentTarget.name;
        let value = event.currentTarget.value;
        if(name === "name"){setName(value)};
        if(name === "message"){setMsg(value)};
    }

    //Function appeler à la souscription du formulaire.
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(sValue !== ""){
            if(sName !== ""){
                console.log('User: '+sName)
            }else{ console.log('Unknown user')}
            console.log('Message: '+sValue)
            
        }
    }

    return(
    <div className="contact">
        <NavBar active={activeNav}/>
        <div className="form">
            <h1>Contact</h1>
            <p>Le champs “Téléphone ou adresse mail ” n’est pas requie si votre message ne nécéssite pas une réponse de ma part. Vous pouvais donc envyé votre message sans remplire ce champs</p>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input className="form-control name" onChange={handleChange} type="text" name="name" placeholder="Telephone ou e-mail"/>
                <textarea className="form-control"  name="message" onChange={handleChange} placeholder="Message..."/>
            </div>
            <button className="send" type="submit">Envoyer</button>
            </form>
        </div>

    </div>
)}

export default Contact; 