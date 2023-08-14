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

let resumeText = `As a student of Software at AAU, I am a part of an environment where we 
strengthen each other in our learning, and where I learn about new concepts and technologies 
almost every day. I improve every day as a programmer, and I love to succeed in challenging 
work.`;

export {resumeText, AboutIntro}
