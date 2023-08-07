import { TextSection} from '../components/TextSection';

/**
 * @returns JSX code describing the about page of the web cv
 */
export function About({themeColor}){
    return (
      <>
      <TextSection color={themeColor} title="Software student" text={resume}/>
      </>
    )
  }
  
  // Content
let resume=`As a student on the Software program at AAU, I am a part of an environment where we constantly fight to master the technology complex of IT. I improve every day as a programmer, and I love challenging work.`
