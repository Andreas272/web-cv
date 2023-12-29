import InfoGridflix from "../sections/InfoGridflix";
import "./Layout.css";

/**
 * @returns The Gridflix page
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
