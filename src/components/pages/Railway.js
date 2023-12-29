import RailwayInfo from "../sections/InfoRailway";
import "./Layout.css";

/**
 * @returns The page about the railway project
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
