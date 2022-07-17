import "./Blog.css";
import NavBar from "../Nav-bar/Nav-bar";

const Blog=()=>{
    let activeNav = 1;
    return(
    <div className="blog">
        <NavBar active={activeNav}/>
    </div>
)}
export default Blog;