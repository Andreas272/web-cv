import "./AboutIntro.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
function AboutIntro({ color, title, text, coloumnStart, coloumnEnd }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div
                className="text-section-item"
                style={{ gridColumn: `${coloumnStart} / ${coloumnEnd}` }}
            >
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

let resumeText = `My passion for creating user-centric products and my strong analytical mindset have led me to change career tracks from education to the dynamic realm of software engineering. My focus lies in developing easily accessible, robust, and easily maintainable systems. In particular, I am interested in e-commerce due to the sector's significant user base and pivotal role in shaping the economic landscape.
`;

export {resumeText, AboutIntro}
