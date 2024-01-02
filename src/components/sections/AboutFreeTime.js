import "./AboutFreeTime.css";
import "./AboutIntro.css";

/**
 * @param {string} color of the background in the text section
 * @param {string} title of the section
 * @param {string} text of the section's body
 * @returns JSX code describing a text section
 */
function AboutFreeTime({ color, title, text }) {
    return (
        <div className="text-section" style={{ backgroundColor: color }}>
            <div className="text-section-title">
                <h2>{title}</h2>
            </div>
            <div className="text-section-item" style={{ gridColumn: "1 / 6"}}>
                {text}
            </div>
            <div className="text-section-item" style={{ gridColumn: "6 / 8"}}>
                <img className="content-image" src="./images/sejlads_regn.jpg" alt="Sejlads i regn"></img>
            </div>
        </div>
    );
}

let freeTimeText = `In my free time, I like to relax by spending time outdoors, particularly sailing and rowing. Indoors, I cherish quality time spent with close friends and family, sharing meals and playing board games. Additionally, I have a passion for music, often playing bass guitar at festive occasions.`;

export { AboutFreeTime, freeTimeText}; 
