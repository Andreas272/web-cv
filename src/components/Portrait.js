import "./Menu.css"
import { Name } from "./Name"

export function Portrait(){
    return (
      <div className='child-block'>
        <center>
        <img 
          className="portrait"
          src="/images/portrait.jpg"
          alt="Andreas Valentin Pedersen"
        />
        </center>
      </div>
    )
  }