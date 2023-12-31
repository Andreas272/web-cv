import "./AboutIntro.css"

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
 function AboutWorkExperience({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-item">
                <h2>{title}</h2>
                <p>
                    I had the pleaseure of teaching Mathemathics and Physics at Sønderborg Statsskole from 2018 to 2022.
                    I have taught approximately 500 STX and HF students, and was active in projects at the school. For
                    example I have..
                    <ul>
                        <li>.. staged the school's Science Show</li>
                        <li>
                            .. participated in the SDU's project <a href="https://www.sdu.dk/da/forskning/labstem">LabSTEM about developing problem oriented education in mathemathics </a>{" "}
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default AboutWorkExperience
