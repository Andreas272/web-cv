import "./Menu.css";

/**
 *
 * @param {string} menuClass describes if where instances of the componenent is placed
 * @returns JSX code describing either the left or right menu
 */
export function Menu({ menuClass }) {
    if (menuClass === "menu-left") {
        return (
            <>
                <div className={menuClass}>
                    <div className="child-block">
                        <Portrait />
                        <LoookingForJob />
                    </div>
                </div>
            </>
        );
    }
    if (menuClass === "menu-right") {
        return (
            <>
                <div className={menuClass}>
                    <Skills skillsArray={skillsArray} />
                </div>
            </>
        );
    }
}

function Portrait() {
    return (
        <center>
            <img className="portrait" src="/images/portrait.jpg" alt="Andreas Valentin Pedersen" />
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
    { skill: "C", profficiency: "competent" },
    { skill: "JavaScript (Node.js, React)", profficiency: "competent" },
    { skill: "HTML/CSS", profficiency: "competent" },
    { skill: "Pyhton (NumPy)", profficiency: "beginner" },
    { skill: "MatLab", profficiency: "competent" },
];

function LoookingForJob({ skillsArray }) {
    return (
        <>
            <h3>Looking For Job</h3>
            <div className="looking-for-job">
                I am looking for a student job in Aalborg while I finish my  bachelordegree in computer sciene. 
                I plan to settle down near Aalborg when I finish the program in june 2025. 
            </div>
        </>
    );
}
