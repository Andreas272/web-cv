import RailwayInfo from "../sections/InfoRailway";
import "./Layout.css";

/**
 * @returns JSX code describing the home page of the web cv
 */
export function Railway({ themeColor }) {
    return (
        <>
            <div className="main-project-page">
                <RailwayInfo color={themeColor} />
            </div>
        </>
    );
}
