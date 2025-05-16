import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "../../css/ScrollList.css";
import SeekingNav from "./SeekingNav";
import Banner from "../Common/Banner";

function PeerScrollList() {
    const navigate = useNavigate();

    const peers = [
        {
            name: "Chris Ben",
            role: "Supportive Listener • Anxiety & Stress",
            profile: "https://randomuser.me/api/portraits/men/45.jpg",
            rating: "4.9 ★",
        },
        {
            name: "Timothy Fredrick",
            role: "Peer Mentor • Exam Pressure & Burnout",
            profile: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: "4.8 ★",
        },
        {
            name: "Macy Stevens",
            role: "Friendly Ear • Family & Social Stress",
            profile: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: "4.7 ★",
        },
    ];

    return (
        <>
            <SeekingNav />
            <Banner banner_text={"Peer Supporters"} />
            <ListGroup as="ul" id="list-group">
                {peers.map((peer, index) => (
                    <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex justify-content-between align-items-center list-item"
                        onClick={() => {
                            if (index === 0) {
                                navigate("/seeking-peer-support-profile");
                            }
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <img
                                src={peer.profile}
                                alt={`${peer.name}'s profile`}
                                className="supporter-profile-img"
                            />
                            <div className="ms-3">
                                <div className="fw-bold">{peer.name}</div>
                                {peer.role}
                            </div>
                        </div>
                        <Badge bg="secondary" pill>
                            {peer.rating}
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default PeerScrollList;
