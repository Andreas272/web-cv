import "./FreeTime.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export function FreeTime({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <h2>{title}</h2>
            <div className="content-container-flex">
                <p className="content-paragraph">{text}</p>
                <img className="content-image" src="./images/sejlads_regn.jpg" alt="Sejlads i regn"></img>
            </div>
        </div>
    );
}
