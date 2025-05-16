import ListGroup from "react-bootstrap/ListGroup";
import "../../css/ScrollList.css";
import SeekingNav from "./SeekingNav";
import { useNavigate } from "react-router-dom";
import Banner from "../Common/Banner";

function SeekingMessageScroll() {
    const navigate = useNavigate();

    const supporters = [
        {
            name: "Dr. Maya Thompson",
            role: "Cognitive Behavioral Therapy Specialist",
            profile: "https://randomuser.me/api/portraits/women/53.jpg",
        },
        {
            name: "Timothy Fredrick",
            role: "Peer Mentor • Exam Pressure & Burnout",
            profile: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Macy Stevens",
            role: "Friendly Ear • Family & Social Stress",
            profile: "https://randomuser.me/api/portraits/women/65.jpg",
        },
    ];

    return (
        <>
            <SeekingNav />
            <Banner banner_text={"Chats"} />
            <ListGroup as="ul" id="list-group">
                {supporters.map((person, index) => (
                    <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex align-items-center list-item"
                        onClick={() => {
                            if (index === 0) {
                                navigate("/seeking-messages-profile");
                            }
                        }}
                    >
                        <img
                            src={person.profile}
                            alt={`${person.name}'s profile`}
                            className="supporter-profile-img"
                        />
                        <div className="ms-3">
                            <div className="fw-bold">{person.name}</div>
                            {person.role}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default SeekingMessageScroll;
