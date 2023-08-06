import { Intro } from "./Intro"
/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export function TextSection({color,title,text}){
    return(
      <div className='home-page-section' style={{backgroundColor: color} }>
        <Intro title={title} text={text} />
      </div>
    )
  }
  