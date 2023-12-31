import "./SocialButtons.css";

/**
 * @param {Array} buttons: array of button objects
 * @returns JSX describing a sequennce of buttons located in the header
 */
function SocialButtons({ buttons }) {
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

const mySocialButtons = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andreas-valentin-pedersen/",
        logoPath: "images/InWhite128.png",
    },
    {
        name: "GitHub",
        url: "https://github.com/Andreas272",
        logoPath: "images/github-mark-white.png",
    },
];

export {SocialButtons, mySocialButtons};
