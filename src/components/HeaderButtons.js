import "./Header.css";

/**
 * @param {Array} buttons: array of button objects
 * @returns JSX describing a sequennce of buttons located in the header
 */
export function HeaderButtons({ buttons }) {
    return (
        <div className="header-buttons">
            {buttons.map((buttoni) => {
                return (
                    <a href={buttoni.url} role="button" style={{ textAlign: "center" }}>
                        <img className="header-button" src={buttoni.logoPath} alt="logo" />
                    </a>
                );
            })}
        </div>
    );
}
