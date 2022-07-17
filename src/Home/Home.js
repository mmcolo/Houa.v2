import './Home.css';

import { Outlet } from 'react-router-dom';
import NavBar from '../Nav-bar/Nav-bar';

const Home = (props) =>{
    let activeNav=0;

    return(
    <div className="home">
        <NavBar active={activeNav}/>
        <Outlet/>
    </div>)
}

export default Home;
