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
                <p>I also like to play music. My instruments are piano and bass guitar. </p>
            </div>
            <div className="text-section-item" style={{ gridColumn: "6 / 8"}}>
                <img className="content-image" src="./images/sejlads_regn.jpg" alt="Sejlads i regn"></img>
            </div>
        </div>
    );
}

let freeTimeText = `Apart from solving problmes with software, I am interested in sailing and 
    generally spending time outdoors. I lived in Sønderborg when I was teaching there. Here, I 
    learned to sail in a J-80 and laiter joined a X-99 for races.  In the picture to the right, 
    I (in the turquoise jacket) am helping packing down the spieler on the X-99. this happedned 
    in rough weather before a race.`;

export { AboutFreeTime, freeTimeText}; 
