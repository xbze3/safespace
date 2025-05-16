import "../../css/LandingHeader.css";
import ss_emblem_lav from "../../assets/safe-space-emblem-lav.svg";
import { Link } from "react-router-dom";

function LandingHeader() {
    return (
        <div className="hero-content">
            <img src={ss_emblem_lav} alt="ss emblem" className="header-image" />
            <h2 className="hero-title">Your space to talk, heal, and grow</h2>
            <p className="hero-tagline">Because your mind matters</p>
            <Link to={"/signup-choice"} className="get-started-btn">
                Get Started
            </Link>
        </div>
    );
}

export default LandingHeader;
