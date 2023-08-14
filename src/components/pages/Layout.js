import { Outlet } from "react-router-dom";
import { mySocialButtons } from "../SocialButtons";
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
                <img src="./images/background.jpg" className="background" alt="background"></img>
                <Margin marginClass="margin-left" />
                <Margin marginClass="margin-right" />
                <Footer />
                <Outlet />
            </div>
        </>
    );
}


