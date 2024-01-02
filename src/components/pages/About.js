import { AboutIntro, resumeText } from "../sections/AboutIntro";
import { AboutEducation, educationText } from "../sections/AboutEducation";
import { AboutFreeTime, freeTimeText } from "../sections/AboutFreeTime";
import AboutWorkExperience from "../sections/AboutWorkExperience";
import SideBar from "../SideBars.js";

/**
 * @returns JSX code describing the about page of the web cv
 */
export function About({ themeColor }) {
    return (
        <>
            <SideBar SideBarClass="sidebar-left" />
            <SideBar SideBarClass="sidebar-right" />
            <div className="main">
                <AboutIntro
                    color={themeColor}
                    title="Dynamic Software Engineer Excited about E-commerce"
                    text={resumeText}
                    coloumnStart={1}
                    coloumnEnd={8}
                />
                <AboutEducation color={themeColor} title="Education" text={educationText} />
                <AboutWorkExperience color={themeColor} title="Work Experience" />
                <AboutFreeTime color={themeColor} title="Interests" text={freeTimeText} />
            </div>
        </>
    );
}
