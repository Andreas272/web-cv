import HomeIntro from "../sections/HomeIntro";
import HomeProjects from "../sections/HomeProjects";
import Menu from "../Menu";
import "./Layout.css";

/**
 * @returns JSX code describing the home page of the web cv
 */
export function Home({ themeColor }) {
    return (
        <>
            <Menu menuClass="menu-left" />
            <Menu menuClass="menu-right" />
            <div className="main">
                <HomeIntro color={themeColor} title="Hi, I am Andreas" text={intro} />
                <HomeProjects color={themeColor} title="Projects" text={projects} />
            </div>
        </>
    );
}

// Content
let intro = `Welcome to my web page. I am 30 years old and I study Software at AAU. 
My first educationen has resultet in four wonderfull years as a physics and maths teacher in the gymnasium. However, I chose to take a break from working and seek out
an enviroenment where I could strengthen my knowledge of the huge IT technology complex which is impacting the world so much.`;

let projects = `This website is my first personal project. In relation to my studies, I have been a part of two exciting and instructive semester projects.
The first project about railway optimization is a program
written in C, which can read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, is a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Read more about the projects by clicking the cards below. 
`;

