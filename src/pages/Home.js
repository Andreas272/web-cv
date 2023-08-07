import { TextSection} from '../components/TextSection';

/**
 * @returns JSX code describing the home page of the web cv
 */
export function Home({themeColor}){
    return (
      <>
      <TextSection color={themeColor} title="Hi, I am Andreas" text={intro}/>
      <TextSection color={themeColor}  title="Programming projects"/>
      <TextSection color={themeColor} title="Teaching"/>
      </>
    )
  }
  
  // Content
let intro=`Welcome to my web page. I am 30 years old and study Software at AAU. 
My first educationen has resultet in four wonderfull years as a physics and maths teacher in the gymnasium. However, I chose to take a break from working and seek out
an enviroenment where I could strengthen my knowledge of the huge IT technology complex which is impacting the world so much.`
