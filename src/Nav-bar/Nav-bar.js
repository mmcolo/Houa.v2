import './Nav-bar.css';
import { Link } from 'react-router-dom';

const NavBar = (props) =>{
    let navs =[
        {
            id:0,
            title: "Accueil"
        },
        {
            id:1,
            title: "Dev-blog"
        },
        {
            id:2,
            title: "Contact"
        }
    ]
    let active ="active";
    
    const activeLink=(index)=>{
        if(props.active==index){
            return active;
        }else{
            return "";
        }
    }

    return(
    <div className="nav-bar">
        <div className="brand">Houa</div>
        <ol className="nav">
            {navs.map((nav, index)=><li key={index}><Link to='/home' className={`Link ${activeLink(index)}`}>{nav.title}</Link></li>
            )}
            {/*
            <li><Link to='/home' className="Link">Accueil</Link></li>
            <li><Link to='/dev-blog' className="Link">Dev-blog</Link></li>
            <li><Link to='/contact' className="Link">Contact</Link></li>*/}
        </ol>

    </div>)
}

export default NavBar;