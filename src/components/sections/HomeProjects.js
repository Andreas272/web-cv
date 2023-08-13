import "./TextSection.css";
import Cards from "../Cards";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export default function HomeProjects({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-title">
                <h2>{title}</h2>
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 8" }}>
                {text}
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 8", placeSelf: "center" }}>
                <Cards />
            </div>
        </div>
    );
}
