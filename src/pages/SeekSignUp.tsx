import "../css/page/SignUpLoginPage.css";
import safe_space_logo_signup from "../assets/safe-space-logo-signup.svg";
import { useNavigate } from "react-router-dom";

function SeekSignUpPage() {
    const navigate = useNavigate();

    return (
        <div className="signup-wrapper">
            <div className="signup-form-container">
                <div className="login-signup-div">
                    <img
                        src={safe_space_logo_signup}
                        alt="Safe Space SignUp Logo"
                        className="login-signup-logo"
                    />
                </div>

                <form className="signup-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input
                        type="password"
                        placeholder="Create Password"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                    />
                    <textarea
                        placeholder="What are you looking to discuss?"
                        rows={4}
                    />
                    <button
                        type="button"
                        onClick={() => navigate("/seeking-dashboard")}
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SeekSignUpPage;
