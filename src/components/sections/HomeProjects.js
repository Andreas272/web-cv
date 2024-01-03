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

let projectsText = `In the Software programme at AAU, I have been a part of exciting and instructive semester projects.
Two notable projects include Gridflix,  a proof of concept grid computing system which uses a host website such as Netflix to recruit workers, and Blaest Management System, a resource planning system for scheduling structural tests of wind turbine blades.
Click the cards below to delve into the details of each project.
`;

export { HomeProjects, projectsText };
