import Button from "react-bootstrap/Button";
import "../../css/ProfileInfo.css";
import BackSeekingNav from "./BackSeekingNav";

function PeerProfileInfo() {
    return (
        <>
            <BackSeekingNav />
            <div id="profile-info-box">
                <div id="profile-info-content">
                    <div className="profile-header">
                        <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="Chris Ben"
                            className="profile-photo"
                        />
                        <div className="profile-header-text">
                            <h1>Chris Ben</h1>
                            <h2>Peer Supporter</h2>
                            <p className="status-badge available">Available</p>
                        </div>
                    </div>

                    <div id="profile-meta">
                        <p>
                            <strong>Support Area:</strong> Anxiety & Stress
                        </p>
                        <p>
                            <strong>Status:</strong> Available
                        </p>
                        <p>
                            <strong>Rating:</strong> 4.9 ★
                        </p>
                    </div>

                    <div id="profile-bio">
                        <h3>About</h3>
                        <p>
                            I'm a trained peer supporter passionate about
                            helping others through open and empathetic
                            conversations. I provide a safe, judgment-free space
                            for anyone dealing with stress, anxiety, or just
                            looking to talk.
                        </p>
                    </div>

                    <Button variant="success" id="book-session-button">
                        Start a Conversation
                    </Button>
                </div>
            </div>
        </>
    );
}

export default PeerProfileInfo;
