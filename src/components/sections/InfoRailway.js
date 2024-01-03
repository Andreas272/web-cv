import "./InfoProject.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns Text section about railway project
 */
export default function InfoRailway({ color }) {
    return (
        <div className="project-info-container">
            <div className="intro" style={{ backgroundColor: color }}>
                <h1>Software Tool for Planning of Train Speed Upgrades in a Railway Network</h1>
                <p>
                    My project group and I made program for calculating travel time in railway
                    networks as our semester project in the autumn 2022. The program is written in
                    C. The source code is located on
                    <a className="link" href="https://github.com/Andreas272/Projekt-1-semester">
                        {" "}
                        Github{" "}
                    </a>
                    I was in particular working on the following parts.
                </p>
                <p style={{ paddingLeft: "15px", marginTop: "-7px" }}>
                    <lu>
                        <li>
                            Breadth-first algorithm for finding shortest path in a weighted graph
                        </li>
                        <li>Functionality for printing the shortest path.</li>
                        <li>
                            Calculation of average travel time in an entire railway network
                            represented by a weighted graph.
                        </li>
                    </lu>
                </p>
                The abstract of the project and a picture of a user interfacing with the program is
                shown below.
            </div>
            <div className="abstract" style={{ backgroundColor: color }}>
                <h2>Abstract</h2>
                <p>
                    We investigated opportunities to reduce carbon emissions within the transport
                    sector, with attention to transportation tasks, where trains compete against
                    planes. Converting passengers from heavy fossil fuel transport such as aviation
                    to electric trains, will contribute to obtaining the European Green Deal. The
                    key to successfully converting passengers is to make train travels faster than
                    aviation travels. We analysed this problem and found that trains can compete
                    with planes on short enough distances. To make trains travels more competitive,
                    it is necessary to upgrade railway networks to high speed networks.
                </p>
                <p>
                    Development of infrastructure is expensive and produces large scale carbon
                    emissions. This underlines the importance of selecting the most efficient routes
                    when improving railway infrastructure. Therefore we made a software, which finds
                    the fastest route from an origin in one city to a destination in another city.
                    This is used to find the average travel time in the railway netowrk. The user
                    can easily change the travel time of a given route in the network and get the
                    new average travel time. This alows the user to evaluate which route would be
                    best to upgrade.
                </p>
            </div>
            <div className="project-design" style={{ backgroundColor: color }}>
                <h2>User Interface</h2>
                <p>
                    The user interfaces with the software through the terminal, as the figure below
                    shows.
                </p>
                <img
                    className="image-system-design-large"
                    src="./images/fig_term_all.png"
                    alt="User interface for program for evaluating travel times in a railway network"
                ></img>
            </div>
        </div>
    );
}
