import "./SideBars.css";

/**
 *
 * @param {string} menuClass describes if where instances of the componenent is placed
 * @returns JSX code describing either the left or right menu
 */
function SideBar({ SideBarClass }) {
    if (SideBarClass === "sidebar-left") {
        return (
            <>
                <div className={SideBarClass}>
                    <div className="child-block">
                        <Portrait />
                        <LookingForJob />
                    </div>
                </div>
            </>
        );
    }
    if (SideBarClass === "sidebar-right") {
        return (
            <>
                <div className={SideBarClass}>
                    <div className="child-block">
                        <Skills skillsArray={skillsArray} />
                    </div>
                </div>
            </>
        );
    }
}

function Portrait() {
    return (
        <center>
            <img className="portrait" src="images/portrait.jpg" alt="Andreas Valentin Pedersen" />
        </center>
    );
}

function Skills({ skillsArray }) {
    return (
        <>
            <h3>Skills</h3>
            <div className="skill-list">
                {skillsArray.map((element) => {
                    return (
                        <>
                            <div className="skill">{element.skill}</div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

const skillsArray = [

    { skill: "JavaScript, HTML and CSS", profficiency: "competent" },
    { skill: "React", profficiency: "competent" },
    { skill: "Java", profficiency: "beginner" },
    { skill: "C", profficiency: "competent" },
    { skill: "Pyhton (NumPy)", profficiency: "beginner" },
    { skill: "MatLab", profficiency: "competent" },
];

function LookingForJob() {
    return (
        <>
            <h3>Looking For Job</h3>
            <div className="looking-for-job">
                 I am seeking opportunities as a software engineer in Northern Jutland. 
                 I am eager to contribute to innovative projects and grow professionally within a collaborative development team.
            </div>
        </>
    );
}

export default SideBar;
