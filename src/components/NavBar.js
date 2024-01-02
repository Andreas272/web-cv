import { Link } from "react-router-dom";
import "./NavBar.css";
import {SocialButtons} from "./SocialButtons";

 function NavBar({ buttons }) {
    return (
        <>
            <nav className="navbar">
                {/*<p className="navbar-logo">Work in Progress</p>*/}
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
                    <li className="nav-item"></li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">
                                Projects{" "}
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                            <Link to="/blaest-management-system" className="dropdown-links">
                                    Blade Test Planning 
                                </Link>
                                <Link to="/gridflix" className="dropdown-links">
                                    Gridflix
                                </Link>
                                <Link to="/this-project" className="dropdown-links">
                                    This website
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>

                <SocialButtons buttons={buttons} />
            </nav>
        </>
    );
}

export default NavBar;
