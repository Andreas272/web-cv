import InfoThisProject from "../sections/InfoThisProject";
import "./Layout.css";

/**
 * @returns JSX code describing the home page of the web cv
 */
export default function ThisProject({ themeColor }) {
    return (
        <>
            <div className="main-project-page">
                <InfoThisProject color={themeColor} />
            </div>
        </>
    );
}
