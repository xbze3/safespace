import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ss_logo from "../../assets/safe-space-emblem-light.svg";
import BackButton from "../Common/BackButton";

import "../../css/BackSeekingNav.css";

function BackGivingNav() {
    return (
        <Navbar
            expand="lg"
            className="nav-navy"
            data-bs-theme="dark"
            collapseOnSelect
        >
            <Container fluid>
                <div id="back-button-div">
                    <BackButton />
                </div>
                <Navbar.Brand as={Link} to="/" id="back-navbar-brand">
                    <img src={ss_logo} alt="SafeSpace Logo" id="ss-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="align-items-center flex-column flex-lg-row">
                        <Nav.Link as={Link} to="/giving-my-clients">
                            My Clients
                        </Nav.Link>

                        <NavDropdown title="Account" id="nav-dropdown-account">
                            <NavDropdown.Item
                                as={Link}
                                to={"/giving-my-profile"}
                            >
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/" className="text-danger">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BackGivingNav;
