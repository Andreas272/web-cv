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
let intro = `Welcome to my website. I am 30 years old and I study Software at AAU. 
This website is my first personal project, and I plan to showcase future projects here. 
For now, you can read about my semester projects at AAU and this website below. 
If you dont know me, you can read more about me in the About-section.  
`;

let projects = `This website is my first personal project. In relation to my studies, I have been a part of two exciting and instructive semester projects.
The first project about railway optimization is a program
written in C, which can read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, is a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Read more about the projects by clicking the cards below. 
`;

