import "./Cards.css";
import CardItem from "./CardsItem";

export default function Cards() {
    return (
        <div className="cards__container">
             <CardItem columnStart="1" columnEnd="2" src="images/blaest-management-system.jpg" title="Blaest Management System" label="blaest management system" path="/blaest-management-system" />
            <CardItem columnStart="2" columnEnd="3" src="images/gridflix.jpg" title="Gridflix" label="Semester project" path="/gridflix" />
            <CardItem columnStart="3" columnEnd="4" src="images/react-long.png" title="This website" label="Personal project" path="/this-project" />
        </div>
    );
}
