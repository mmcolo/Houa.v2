import './Page.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import DoteOne from '../Home/Dotes/DoteOne';
import DoteTwo from '../Home/Dotes/DoteTwo';
import DoteTree from '../Home/Dotes/DoteTree';
import Blog from '../blog/Blog';
import Contact from '../Contact/Contact';

const Page = () =>{
    

    return(
    <div className="page">
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/" element={<DoteOne active={0}/>}/>
                </Route>
                <Route path="/home" element={<Home/>}>
                    <Route path="/home" element={<DoteOne active={0}/>}/>
                    <Route path="/home/DoteOne" element={<DoteOne active={0}/>}/>
                    <Route path="/home/DoteTwo" element={<DoteTwo active={1}/>}/>
                    <Route path="/home/DoteTree" element={<DoteTree active={2}/>}/>
                </Route>
                <Route path="/dev-blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    </div>)
}

export default Page;