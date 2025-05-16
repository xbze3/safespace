import Button from "react-bootstrap/Button";
import "../../css/ProfileInfo.css";
import BackGivingNav from "./BackGivingNav";
import Banner from "../Common/Banner";

function GivingMyProfile() {
    return (
        <>
            <BackGivingNav />
            <Banner banner_text={"My Profile"} />
            <div id="profile-info-box">
                <div id="profile-info-content">
                    <div className="profile-header">
                        <img
                            src="https://randomuser.me/api/portraits/women/53.jpg"
                            alt="Dr. Maya Thompson"
                            className="profile-photo"
                        />
                        <div className="profile-header-text">
                            <h1>Dr. Maya Thompson</h1>
                            <h2>Cognitive Behavioral Therapy</h2>
                            <p className="status-badge available">Available</p>
                        </div>
                    </div>

                    <div id="profile-meta">
                        <p>
                            <strong>Experience:</strong> 8 years
                        </p>
                        <p>
                            <strong>Rating:</strong> 4.9 ★
                        </p>
                    </div>

                    <div id="profile-bio">
                        <h3>About</h3>
                        <p>
                            I am a licensed clinical psychologist who
                            specializes in helping clients manage anxiety,
                            depression, and stress through Cognitive Behavioral
                            Therapy. I follow a client-centered, empathetic, and
                            evidence-based approach to therapy.
                        </p>
                    </div>

                    <div id="profile-qualifications">
                        <h3>Qualifications</h3>
                        <ul>
                            <li>
                                Ph.D. in Clinical Psychology – Stanford
                                University
                            </li>
                            <li>Certified CBT Practitioner</li>
                            <li>
                                Licensed by the American Board of Professional
                                Psychology
                            </li>
                            <li>Over 500+ successful therapy cases</li>
                        </ul>
                    </div>

                    <Button variant="success" id="book-session-button">
                        Edit Profile
                    </Button>
                </div>
            </div>
        </>
    );
}

export default GivingMyProfile;
