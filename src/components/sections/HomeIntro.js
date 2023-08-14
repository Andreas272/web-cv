import "./TextSection.css";
import LinkButton from "../LinkButton";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
export default function HomeIntro({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-title">
                <h2>{title}</h2>
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 6" }}>
                {text}
            </div>
            <div className="text-section-item" style={{ gridColumn: "6 / 8", placeSelf: "center" }}>
                <LinkButton
                    route="/About"
                    children="Read more"
                    buttonStyle="button--primary"
                    buttonSize="button--large"
                />
            </div>
        </div>
    );
}
