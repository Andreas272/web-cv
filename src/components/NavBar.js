import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Logo
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-links">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
}
