import InfoGridflix from "../sections/InfoGridflix";
import "./Layout.css";

/**
 * @returns JSX code describing the home page of the web cv
 */
export function Gridflix({ themeColor }) {
    return (
        <>
            <div className="main-project-page">
                <InfoGridflix color={themeColor} />
            </div>
        </>
    );
}
