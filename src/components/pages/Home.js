import { HomeIntro, introText } from "../sections/HomeIntro";
import { HomeProjects, projectsText } from "../sections/HomeProjects";
import SideBar from "../SideBars";
import "./Layout.css";

/**
 * @returns JSX code describing the home page of the web cv
 */
export function Home({ themeColor }) {
    return (
        <>
            <SideBar SideBarClass="sidebar-left" />
            <SideBar SideBarClass="sidebar-right" />
            <div className="main">
                <HomeIntro color={themeColor} title="Hi, I am Andreas" text={introText} />
                <HomeProjects color={themeColor} title="Projects" text={projectsText} />
            </div>
        </>
    );
}
