import { Link } from "react-router-dom";

export default function CardItem(props) {
    return (
        <>
            <div
                className="cards__item"
                style={{ gridColumn: `${props.columnStart} / ${props.columnEnd}` }}
            >
                <Link className="cards__item__link" to={props.path}>
                    <div className="cards__item__img__container">
                        <img className="cards__item__img" alt="Project" src={props.src} />
                    </div>
                    <div className="cards__item__title__container">{props.title}</div>
                </Link>
            </div>
        </>
    );
}
