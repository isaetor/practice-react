import { Link } from "react-router-dom"

export const Nav = ()=>{
    return (
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/profile" >Profile</Link>
        </nav>
    )
}