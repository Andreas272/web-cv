import { TextSection } from "../sections/TextSection";
import { Education } from "../sections/Education";
import { FreeTime } from "../sections/FreeTime";
import { WorkExperience } from "../sections/WorkExperience";
import Menu from "../Menu.js"

/**
 * @returns JSX code describing the about page of the web cv
 */
export function About({ themeColor }) {
    return (
        <>
            <Menu menuClass="menu-left" />
            <Menu menuClass="menu-right" />
            <div className="main">
                <TextSection
                    color={themeColor}
                    title="Software Student"
                    text={resume}
                    coloumnStart={1}
                    coloumnEnd={8}
                />
                <Education color={themeColor} title="Education" text={education} />
                <WorkExperience color={themeColor} title="Work Experience" />
                <FreeTime color={themeColor} title="Interests" text={freeTime} />
            </div>
        </>
    );
}

// Content
let resume = `As a student of Software at AAU, I am a part of an environment where we strengthen each other in our learning, and where I learn about new concepts and technologies almost every day. I improve every day as a programmer, and I love to succeed in challenging work.`;

let education = `I am currently studying Software at AAU.  
               I chose to take this pause from working, in order to give myself good circymstances to improve my skills within IT in a major way. As a student at AAU,
               I am a part of a good environment for learning, and I have the benefit of being able to study full time. `;

let freeTime = `Apart from solving problmes with software, I am interested in sailing and generally spending time outdoors. I lived in Sønderborg when I was teaching there. Here, I learned to sail in a J-80 and laiter joined a X-99 for races.  In the picture to the right, I (in the turquoise jacket) am helping packing down the spieler on the X-99. this happedned in rough weather before a race.`;
