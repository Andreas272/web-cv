import {Link} from "react-router-dom"

export default function Nav(){
    return(
        <nav >
            <ul className="nav-menu">
                <li>
                    <Link to="/" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="link">About me</Link>
                </li>
            </ul>
        </nav>
    )
}