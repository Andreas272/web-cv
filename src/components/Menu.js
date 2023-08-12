import "./Menu.css";
import { SocialButtons } from "./SocialButtons";

/**
 *
 * @param {string} menuClass describes if where instances of the componenent is placed
 * @returns JSX code describing either the left or right menu
 */
export function Menu({ menuClass }) {
    if (menuClass === "menu-left") {
        return (
            <>
                <div className={menuClass}>
                <div className="child-block">
                    <Portrait />
                </div>
                </div>
            </>
        );
    }
    if (menuClass === "menu-right") {
        return (
            <>
                <div className={menuClass}>
                    <center></center>
                </div>
            </>
        );
    }
}

function Portrait() {
    return (
            <center>
                <img className="portrait" src="/images/portrait.jpg" alt="Andreas Valentin Pedersen" />
            </center>
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


