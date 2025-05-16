import ListGroup from "react-bootstrap/ListGroup";
import "../../css/ScrollList.css";
import { useNavigate } from "react-router-dom";
import Banner from "../Common/Banner";
import GivingNav from "./GivingNav";

function GivingMessageScroll() {
    const navigate = useNavigate();

    const supporters = [
        {
            name: "Demo Client",
            profile: "https://randomuser.me/api/portraits/men/54.jpg",
        },
        {
            name: "Nick Touver",
            profile: "https://randomuser.me/api/portraits/men/56.jpg",
        },
        {
            name: "Sid Mitens",
            profile: "https://randomuser.me/api/portraits/men/31.jpg",
        },
    ];

    return (
        <>
            <GivingNav />
            <Banner banner_text={"My Clients"} />
            <ListGroup as="ul" id="list-group">
                {supporters.map((person, index) => (
                    <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex align-items-center list-item"
                        onClick={() => {
                            if (index === 0) {
                                navigate("/giving-messages-profile");
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
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}

export default GivingMessageScroll;
