import "./AboutIntro.css";
import LinkButton from "../LinkButton";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
function HomeIntro({ color, title, text }) {
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

let introText = `Welcome to my website. After four years of work experience within educaion, I am changing tracks and studying to become a software engineer. 
This website is my first personal project where you can read more about me and my other programming projects. 
`;

export{HomeIntro, introText}