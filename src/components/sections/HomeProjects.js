import "./AboutIntro.css";
import Cards from "../Cards";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
function HomeProjects({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-title">
                <h2>{title}</h2>
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 8" }}>
                {text}
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 8", placeSelf: "center" }}>
                <Cards />
            </div>
        </div>
    );
}

let projectsText = `This website is my first personal project. In relation to my studies, I have been a part of two exciting and instructive semester projects.
The first project about railway optimization is a program
written in C, which can read a file containing travel times and stations in a train network and find all pairs shortest paths.
The second project, Gridflix, is a proof of concept for a grid computing system which uses a host website such as Netflix to recruit workers. 
Read more about the projects by clicking the cards below. 
`;

export { HomeProjects, projectsText };
