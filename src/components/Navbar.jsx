import {Routes, Route, Link} from "react-router-dom";

export default function Navbar() {
return (
    <div>
        <Link to ="/">Home</Link>
        <Link to ="/posts">Posts</Link>
        
    </div>
)
}