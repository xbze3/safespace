import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "../../css/ScrollList.css";
import SeekingNav from "./SeekingNav";
import Banner from "../Common/Banner";

function ScrollList() {
    const navigate = useNavigate();

    const professionals = [
        {
            name: "Dr. Maya Thompson",
            role: "Cognitive Behavioral Therapy Specialist",
            profile: "https://randomuser.me/api/portraits/women/53.jpg",
            rating: "4.9 ★",
        },
        {
            name: "Mr. James Ali",
            role: "Stress & Anxiety Management",
            profile: "https://randomuser.me/api/portraits/men/43.jpg",
            rating: "4.8 ★",
        },
        {
            name: "Dr. Aisha Grant",
            role: "Trauma-Informed Therapy",
            profile: "https://randomuser.me/api/portraits/women/38.jpg",
            rating: "4.5 ★",
        },
    ];

    return (
        <>
            <SeekingNav />
            <Banner banner_text={"Therapists"} />
            <ListGroup as="ul" id="list-group">
                {professionals.map((person, index) => (
                    <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex justify-content-between align-items-center list-item"
                        onClick={() => {
                            if (index === 0) {
                                navigate("/seeking-dashboard-profile");
                            }
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <img
                                src={person.profile}
                                alt={`${person.name}'s profile`}
                                className="supporter-profile-img"
                            />
                            <div className="ms-3">
                                <div className="fw-bold">{person.name}</div>
                                {person.role}
                            </div>
                        </div>
                        <Badge bg="success" pill>
                            {person.rating}
                        </Badge>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default ScrollList;
