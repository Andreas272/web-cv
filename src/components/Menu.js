import { Contacts } from "./Contacts";
import Nav from "./Nav";
import "./Menu.css";

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
                    <Portrait />
                </div>
            </>
        );
    }
    if (menuClass === "menu-right") {
        return (
            <>
                <div className={menuClass}>
                    <center>
                        <Contacts />
                    </center>
                </div>
            </>
        );
    }
}

function Portrait() {
  return (
      <div className="child-block">
          <center>
              <img className="portrait" src="/images/portrait.jpg" alt="Andreas Valentin Pedersen" />
          </center>
      </div>
  );
}
