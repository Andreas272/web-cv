import "./AboutEducation.css";
import "./AboutIntro.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
function AboutEducation({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-item">
                <h2>{title}</h2>
                <p>{text}</p>
                <h3 className="split-para">
                    Software <span>Sept. 22 - Now</span>
                </h3>
                <p>
                    Projects
                    <ul>
                        <li>Blaest Management System: Scheduling and Resource Management System for Wind Turbine Blade Tests.</li>
                        <dd>
                            A system that supports dynamic planning of blade tests by utilizing drag-and-drop functionality and automatic allocation of equipment while notifying conflicts.
                        </dd>
                        <li>Gridflix:Engagement Oriented Browser Based Grid Computing Utilizing Established Consumer Websites.</li>
                        <dd>
                            A proof-of-concept for browser based grid computing where workers are hired through a third-party website such as Netflix.com. 
                        </dd>
                        <li>
                            Tool for Planning of Train Speed Upgrades in a Railway Network.
                        </li>
                        <dd>
                            The user can change travel times in a train network and
                            thereby see what effect a train speed upgrade of a specific connection has to the average travel time in the whole network. The program is written in C. 
                        </dd>
                    </ul>
                </p>
                <p>
                    Courses
                    <ul>
                        <li>Object Oriented Programming</li>
                        <li>Internetwork and Web-programming</li>
                        <li>Imperativ Programming</li>
                        <li>Algorithms and Data-structures</li>
                        <li>Systems Development</li>
                        <li>Design and Evaluation of User Interfaces</li>
                        
                    </ul>
                </p>
            </div>
        </div>
    );
}

let educationText = `I am currently studying Software at AAU where I am a part of a excellent environment for group-based learning. `;

export { AboutEducation, educationText };
