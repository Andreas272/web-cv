import { TextSection} from '../TextSection';
import { Education } from '../Education';

/**
 * @returns JSX code describing the about page of the web cv
 */
export function About({themeColor}){
    return (
      <>
      <div className='main'>
        <TextSection color={themeColor} title="Software student" text={resume}/>
        <Education color={themeColor} title="Education" text={education}/>
        <TextSection color={themeColor} title="Work Experience" text={work}/>
        <TextSection color={themeColor} title="Free time" text={freeTime}/>
      </div>
      </>
    )
  }
  
  // Content
let resume=`As a student of Software at AAU, I am a part of an environment where we constantly fight to master the technology complex of IT. I improve every day as a programmer, and I love challenging work.`

let education=`I am currently studying Software at AAU.  
               I chose to take this pause from working, in order to give myself good circymstances to improve my skills within IT in a major way. As a student at AAU,
               I am a part of a good environment for learning, and I have the benefit of being able to study full time. `

let work=`I had the pleaseure of teaching Mathemasthics and Physics in the gymnasium from 2018 to 2022. 
          I developed alot as a person, and trained communication and leadership in a larger group.`

let freeTime=`In my free time I like to sail.`