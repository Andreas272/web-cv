import "./SocialButtons.css";

/**
 * @param {Array} buttons: array of button objects
 * @returns JSX describing a sequennce of buttons located in the header
 */
export default function SocialButtons({ buttons }) {
    return (
        <div className="social-buttons">
            {buttons.map((buttoni) => {
                return (
                    <a href={buttoni.url} role="button" style={{ textAlign: "center" }}>
                        <img className="social-button" src={buttoni.logoPath} alt="logo" />
                    </a>
                );
            })}
        </div>
    );
}
