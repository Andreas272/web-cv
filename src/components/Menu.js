import { Contacts } from './Contacts';
import { Portrait } from './Portrait';
import { Name } from './Name';

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
          <Name />
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