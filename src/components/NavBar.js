import { Link } from "react-router-dom";
import "./NavBar.css";
import SocialButtons from "./SocialButtons";

export default function NavBar({ buttons }) {
    return (
        <>
            <nav className="navbar">
                <p className="navbar-logo">
                    Work in Progress
                </p>
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
                <SocialButtons buttons={buttons} />
            </nav>
        </>
    );
}

