/**
 * @param {Array} buttons: array of button objects 
 * @returns JSX describing a sequennce of buttons located in the header
 */
export function HeaderButtons({buttons}){
  return(
    <div className="header-buttons">
      {buttons.map((buttoni,i)=>{
        return(
        <a href={buttoni.url} className='header-button' role="button">
          {buttoni.name}
        </a>
        )
      }
      )}
    </div>
  )
}