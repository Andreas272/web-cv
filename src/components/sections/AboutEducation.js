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
                        <li>
                            Gridflix:Engagement Oriented Browser Based Grid Computing Utilizing
                            Established Consumer Websites
                        </li>
                        <dd>
                            A proof-of-concept for browser based grid computing where workers are
                            hired through a third-party website such as Netflix.com. The source code
                            can be seen in P2_GridServer and P2_HostServer the groups{" "}
                            <a href="https://github.com/SW2-09">GitHub</a>.
                        </dd>
                        <li>
                            Tool for Planning of Train Speed Upgrades in a Railway Network (
                            <a href="https://github.com/Andreas272/Projekt-1-semester">
                                GitHub repository
                            </a>
                            )
                        </li>
                        <dd>
                            The program, which is written in C, can read a text file describing
                            train stations a travel times in a train network. It then calculates all
                            pairs shortest paths, and the average travel time in the network. The
                            user can change travel times in the network and thereby see what effect
                            a train speed upgrade of a specific connection has to the average travel
                            time in the whole network.
                        </dd>
                    </ul>
                </p>
                <p>
                    Courses
                    <ul>
                        <li>Internetwork and Web-programming</li>
                        <li>Algorithms and Data-structures</li>
                        <li>Imperativ Programming</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

let educationText = `I am currently studying Software at AAU.  
               I chose to take this pause from working, in order to give myself good circymstances to improve my skills within IT in a major way. As a student at AAU,
               I am a part of a good environment for learning, and I have the benefit of being able to study full time. `;

export { AboutEducation, educationText };
