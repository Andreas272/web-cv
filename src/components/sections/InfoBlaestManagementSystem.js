import "./InfoProject.css";

/**
 * @param {string} color Background color of the text section
 * @returns {JSX.Element} Text section of the page about Blaest Management System
 */
export default function InfoBlaestManagementSystem({ color }) {
    return (
        <div className="project-info-container">
            <div className="intro" style={{ backgroundColor: color }}>
                <h1>Blaest Management System</h1>
                <p>
                    For our semester project in autumn 2023, my project group and I developed a resource planning system for Blaest Blade Test Centre to schedule structural tests of wind turbine blades. The source code is located in the repositories
                    <a className="link" href="https://github.com/cs-23-sw-3-10/P3_Backend">
                        {" "}
                        P3_Backend{" "}
                    </a>
                    and{" "}
                    <a className="link" href="https://github.com/cs-23-sw-3-10/p3_Frontend_Typescript">
                        {" "}
                        P3_Frontend
                    </a>
                    . The main feature of the
                    system is a schedule where test tasks are represented and can be dragged and dropped to new locations in the schedule. When a change is
                    made to the schedule, the backend calculates if there are any conflicts related to the resources attached to the test tasks. If a conflict
                    occurs, it is shown to the user with relevant information. The user can create new tasks, assign resources to them, and maintain the
                    collection of resources in the database.
                </p>
                <p>I was in particular working on the following parts of the system:</p>

                <ul>
                    <li>Pending tasks component for tasks not yet placed in the schedule. </li>
                    <li>Drag-and-drop of tasks from the pending tasks component to the schedule and vice versa. </li>
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
                    This project investigates through object-oriented analysis and human-centered methods how a software solution can be developed to improve
                    the day-to-day workflow at Blaest. This is done by simplifying the management of resources and blade testing processes. Additionally, the
                    solution should ensure that no unknown conflicts arise due to overbooking of resources.
                </p>
                <p>
                    The final product allows for dynamic planning by utilizing drag-and-drop functionality. Furthermore, the system automatically manages and
                    monitors the allocation of test activities and equipment, while notifying conflicts. The solution has proven to be usable based on usability
                    tests carried out with Blaest.
                </p>

                <h2> Tools </h2>
                <p>The project uses TypeScript with React on the frontend and Java with Spring Boot on the backend.</p>
            </div>
            <div className="project-design" style={{ backgroundColor: color }}>
                <h2>Schedule View</h2>
                <p>
                    The schedule is the main feature of the program. When a test task is created, it appears in the schedule or in Pending Tasks. In the figure
                    below, the task with the red border is in conflict since a particular resource was overbooked when the task was placed in the schedule.
                </p>
                <p>
                    The tasks can be edited by right-clicking on them, or they can be dragged to a new position. The schedule is edited in a dedicated edit mode. The edited schedule only
                    takes the place as the active schedule when the user decides to make it so.
                </p>
                <img className="image-blaest-schedule" src="./images/blaest-management-system-schedule.jpg" alt="Blaest Management System schedule view" />
            </div>
        </div>
    );
}
