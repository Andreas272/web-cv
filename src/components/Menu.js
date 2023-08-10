import { Contacts } from './Contacts';
import { Portrait } from './Portrait';
import { Name } from './Name';
import Nav from "./Nav"
import "./Menu.css"

/**
 * 
 * @param {string} menuClass describes if where instances of the componenent is placed
 * @returns JSX code describing either the left or right menu
 */
export function Menu({menuClass}){
    if(menuClass==="menu-left"){
      return(
        <>  
        <div className={menuClass}>
          <Portrait />
          <Nav />
        </div>   
        </>
      )
    }
    if(menuClass==="menu-right"){
      return(
        <>  
        <div className={menuClass}>
          <center>
            <Contacts />
          </center>
        </div>   
        </>
      )
    }
  }