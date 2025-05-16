import { useNavigate } from "react-router-dom";
import "../../css/BackButton.css";
import back_button from "../../assets/safe-space-back-button.svg";

function BackButton({ to }: { to?: string }) {
    const navigate = useNavigate();

    return (
        <button
            className="back-button"
            onClick={() => (to ? navigate(to) : navigate(-1))}
        >
            <img src={back_button} alt="Back Button" id="back-button" />
        </button>
    );
}

export default BackButton;
