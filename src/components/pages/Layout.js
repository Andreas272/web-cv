import { Outlet } from "react-router-dom";
import { Menu } from "../Menu";
import { Margin } from "../Margin";
import { Footer } from "../Footer";
import NavBar from "../NavBar";
import "./Layout.css"

/**
 * @returns JSX code describing the layout of the website which is independent on route.
 */
export function Layout() {
    return (
        <>
            <NavBar buttons={mySocialButtons}/>
            <div className="container">
                {" "}
                {/*container class sets up grid for division of page into segments*/}
                <img src="./images/background.jpg" className="background"></img>
                <Margin marginClass="margin-left" />
                <Margin marginClass="margin-right" />
                <Footer />
                <Outlet />
            </div>
        </>
    );
}

const mySocialButtons = [
  {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/andreas-valentin-pedersen/",
      logoPath: "images/InWhite128.png",
  },
  {
      name: "GitHub",
      url: "https://github.com/Andreas272",
      logoPath: "images/github-mark-white.png",
  },
];
