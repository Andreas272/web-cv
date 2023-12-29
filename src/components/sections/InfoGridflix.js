import "./InfoProject.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns Text section about Gridflix
 */
export default function InfoGridflix({ color }) {
    return (
        <div className="project-info-container">
            <div className="intro" style={{ backgroundColor: color }}>
                <h1>Gridflix</h1>
                <p>
                    My project group and I made a grid computing system, Gridflix, as our semester
                    project in the spring 2023. The project consists of two servers, the grid- and
                    host server. The source code of the servers is located on the Github
                    repositories
                    <a className="link" href="https://github.com/SW2-09/P2_GridServer">
                        {" "}
                        P2_GridServer{" "}
                    </a>
                    and{" "}
                    <a className="link" href="https://github.com/SW2-09/P2_HostServer.git">
                        {" "}
                        P2_HostServer
                    </a>
                    . By using existing tools such as WebSockets and WebWorkers, and by developing
                    our own tools such as queue system and subtask feeder, we made a system which
                    was able to do matrix multiplication via grid computing. A buyer of
                    computational power can create a job, workers can log in to Gridlix and compute
                    subtasks while wathcing a movie and get credits the work they do, and the buyer
                    can download the result once the computation is done. Cases where
                    subtask-results are not returned by a worker are accounted for in the queue
                    system by maintaining a list of pending subtasks and a list of failed subtasks.
                    If a pending subtask is not resolved before a timeout, it is moved to the failed
                    subtask list and send out again.
                </p>
                <p>I was in particular working on the following parts.</p>
                    <ul>
                        <li>The WebSocket communication between worker and grid server.</li>
                        <li>
                            Functionality making it possible for the buyer of computational power to
                            delete a job from the system. This included updating the databse.
                        </li>
                        <li>
                            Setting up Mocha test environment and writing test cases for core
                            functionality.
                        </li>
                    </ul>
            </div>
            <div className="abstract" style={{ backgroundColor: color }}>
                <h2>Abstract</h2>
                <p>
                    With the increasing demand for solving large computational tasks, the question
                    arises of how the CPUs and GPUs of PCs can be utilized to satisfy this demand.
                    We (the project group) reviewed existing grid computing systems that combine PCs
                    to solve large computational tasks. Our review showed that application-based
                    systems are fast due to unhindered access to CPU and GPU while browser-based
                    systems are slow due to the sandbox environment the browser constitutes. To
                    overcome this limitation of browser-based systems, we proposed a model where
                    visitors of a popular thirdparty website are recruited to compute during their
                    visit thus enabling recruitment of a large number of workers.
                </p>
                <p>
                    To prove that this approach worked, we have developed a proof of concept system,
                    Gridflix, that uses a streaming service similar to Netflix.com as a third-party
                    website. This system enables an increase in participation by lowering the
                    barrier of entry and taking advantage of a large user base.
                </p>
                <h2> Tools </h2>
                <p>The following tools were, among others, used to develop the system. </p>
                <p>
                    <ul>
                        <li>node.js</li>
                        <li>Express</li>
                        <li>EJS</li>
                        <li>WebSockets</li>
                        <li>WebWorkers</li>
                        <li>MongoDB</li>
                        <li> Git </li>
                        <li>Mocha and Chai</li>
                    </ul>
                </p>
            </div>
            <div className="project-design" style={{ backgroundColor: color }}>
                <h2>System Design</h2>
                <p>
                    The vision of the grid computing system is to create a service that depends on
                    existing host websites to recruit workers who are already using these websites.
                    To achieve this, it was envisioned to minimize any code that would be embedded
                    in the host websites. Instead, it was made possible for a main server, referred
                    to as the grid server, to communicate and utilize the computing power of the
                    users on the host websites.
                </p>
                <p style={{marginTop: "-16px"}}>
                    The figure below shows an overview of the vision design from which the grid computing
                    system was developed. The grid computing system is located on the grid server
                    and the server of the host website is referred to as the host server.
                    All components in the design was implemented except the Partition Optimizer and
                    the Combiner. 
                </p>
                <img
                    className="image-system-design"
                    src="./images/gridflix-design.png"
                    alt="Gridflix system design"
                ></img>
            </div>

        </div>
    );
}
