import "./TextSection.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export function TextSection({ color, title, text, coloumnStart, coloumnEnd }) {
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
