import "./LinkButton.css";
import { Link } from "react-router-dom";

const STYLES = ["button--primary", "button-outline"];
const SIZES = ["button--medium", "button--large", "button--small"];

export default function LinkButton({route, onClick, children, buttonStyle, buttonSize }) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={route}>
            <button className={`button ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
                {children}
            </button>
        </Link>
    );
}
