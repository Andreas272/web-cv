import InfoBlaestManagementSystem from "../sections/InfoBlaestManagementSystem";
import "./Layout.css";

/**
 * @returns The home page of the web cv
 */
export function BlaestManagementSystem({ themeColor }) {
    return (
        <>
            <div className="main-project-page">
                <InfoBlaestManagementSystem color={themeColor} />
            </div>
        </>
    );
}
