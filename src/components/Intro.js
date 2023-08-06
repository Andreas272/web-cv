/**
 * @param {string} title 
 * @param {string} text body of Intro
 * @returns JSX code describing the introdution of the home page
 */
export function Intro({title,text}){
    return(
      <>
    <h2>{title}</h2>
    <p>{text}</p>
     </>
    )
  }