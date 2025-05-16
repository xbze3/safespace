import "../css/page/SignUpLoginPage.css";
import safe_space_logo_login from "../assets/safe-space-logo-login.svg";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div className="signup-wrapper">
            <div className="signup-form-container">
                <div className="login-signup-div">
                    <img
                        src={safe_space_logo_login}
                        alt="Safe Space Login Logo"
                        className="login-signup-logo"
                    />
                </div>

                <form className="signup-form">
                    <input type="email" placeholder="Email Address" required />
                    <input
                        type="password"
                        placeholder="Create Password"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => navigate("/giving-my-clients")}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
