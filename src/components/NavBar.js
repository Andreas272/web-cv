import { Link } from "react-router-dom";
import "./NavBar.css";
import SocialButtons from "./SocialButtons";

export default function NavBar({ buttons }) {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    Work in Progress
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
                <SocialButtons buttons={buttons} />
            </nav>
        </>
    );
}

function Contacts() {
    return (
        <div className="contacts">
            <p>
                Andreas Valentin Pedersen <br></br>
                andreasvalentin<wbr></wbr>@hotmail.com <br></br>
                +45 25 48 46 70 <br></br>
            </p>
        </div>
    );
}
