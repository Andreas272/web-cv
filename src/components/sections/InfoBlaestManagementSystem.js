import "./InfoProject.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns text section of page about Blaest Management System
 */
export default function InfoBlaestManagementSystem({ color }) {
    return (
        <div className="project-info-container">
            <div className="intro" style={{ backgroundColor: color }}>
                <h1>Blaest Management System</h1>
                <p>
                    As our semester project in the autumn 2023, my project group and I made a resource planning system for Blaest Blade Test Centre to use for
                    scheduling structural tests of wind turbine blades. The source code is located on the repositories
                    <a className="link" href="https://github.com/cs-23-sw-3-10/P3_Backend">
                        {" "}
                        P3_Backend{" "}
                    </a>
                    and{" "}
                    <a className="link" href="https://github.com/cs-23-sw-3-10/p3_Frontend_Typescript">
                        {" "}
                        P3_Frontend
                    </a>
                    . The system was developed in coorporation with Blaest and meets the must-have requirements for Blaest to use it. The main feature of the
                    system is a schedule view where test tasks are represented and can be dragged and dropped to new locations in the schedule. When a change is
                    made to the schedule, the backend calculates if there are any conflicts related to the resources attached to the test tasks. If a conflict
                    occurs, it is shown to the user with relevant information. The user can create new tasks, assign resources to them, and maintain the
                    collection of resources in the database.
                </p>
                <p>
                    In particular, I worked on the following features of the program:
                </p>

                <ul>
                    <li>Pending tasks compoent for tasks not yet placed in the shedule. </li>
                    <li>Drag-and-drop of tasks from the pending tasks compoent to the schedule and vice versa. </li>
                    <li>Displaying conflict messages to the user.</li>
                </ul>
            </div>
            <div className="abstract" style={{ backgroundColor: color }}>
                <h2>Abstract</h2>
                <p>
                    Scheduling and resource management can be a hassle when done manually. This is the issue for the collaborator of this project, the company
                    Blaest, which specializes in testing wind turbine blades. Each test requires a series of special equipment. Since multiple blades are tested
                    simultaneously, Blaest needs to coordinate the available resources.
                </p>
                <p>
                    This project investigates through object oriented analysis and human centered methods how a software solution can be developed to improve the
                    day-to-day workflow at Blaest. This is done by simplifying the management of resources and blade testing processes. Additionally, the
                    solution should ensure that no unknown conflicts arise due to overbooking of resources.
                </p>
                <p>
                    The final product allows for dynamic planning by utilizing drag-and-drop functionality. Furthermore, the system automatically manages and
                    monitors the allocation of test activities and equipment, while notifying conflicts. The solution has proven to be usable based on usability
                    tests carried out with Blaest.
                </p>

                <h2> Tools </h2>
                <p>
                    The project uses TypeScript with React on the frontend and Java with Spring Boot on the backend. 
                </p>
            </div>
            <div className="project-design" style={{ backgroundColor: color }}>
                <h2>System Design</h2>
                <p>
                    The vision of the grid computing system is to create a service that depends on existing host websites to recruit workers who are already
                    using these websites. To achieve this, it was envisioned to minimize any code that would be embedded in the host websites. Instead, it was
                    made possible for a main server, referred to as the grid server, to communicate and utilize the computing power of the users on the host
                    websites.
                </p>
                <p style={{ marginTop: "-16px" }}>
                    The figure below shows an overview of the vision design from which the grid computing system was developed. The grid computing system is
                    located on the grid server and the server of the host website is referred to as the host server. All components in the design was
                    implemented except the Partition Optimizer and the Combiner.
                </p>
                <img className="image-blaest-system-design" src="./images/gridflix-design.png" alt="Gridflix system design"></img>
            </div>
        </div>
    );
}
