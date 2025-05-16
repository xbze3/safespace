import { useNavigate } from "react-router-dom";
import give_help_emblem from "../assets/give-help-emblem.svg";
import seek_help_emblem from "../assets/seek-help-emblem.svg";
import LandingNav from "../components/Landing/LandingNav";
import "../css/page/UserTypePage.css";

function UserTypePage() {
    const navigate = useNavigate();

    return (
        <>
            <LandingNav />
            <div className="user-options">
                <div
                    className="user-seek"
                    onClick={() => navigate("/seek-signup")}
                >
                    <img
                        src={seek_help_emblem}
                        alt="Seek Help"
                        className="seek-img"
                    />
                    <h3 className="seek-help-text">Seek Help</h3>
                </div>
                <div
                    className="user-give"
                    onClick={() => navigate("/give-signup")}
                >
                    <img
                        src={give_help_emblem}
                        alt="Give Help"
                        className="give-img"
                    />
                    <h3 className="give-help-text">Give Help</h3>
                </div>
            </div>
        </>
    );
}

export default UserTypePage;
