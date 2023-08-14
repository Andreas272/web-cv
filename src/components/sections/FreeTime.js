import "./FreeTime.css";
import "./TextSection.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export function FreeTime({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-title">
                <h2>{title}</h2>
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 6"}}>
                {text}
                <p>I also like to play music. My instruments are piano and bass guitar. </p>
            </div>
            <div className="text-section-item" style={{ gridColumn: "6 / 8"}}>
                <img className="content-image" src="./images/sejlads_regn.jpg" alt="Sejlads i regn"></img>
            </div>
        </div>
    );
}
