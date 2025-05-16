import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import ss_logo from "../../assets/safe-space-emblem.svg";

import "../../css/NavBar.css";

function SeekingNav() {
    return (
        <Navbar
            expand="lg"
            className="nav-navy"
            data-bs-theme="dark"
            collapseOnSelect
        >
            <Container fluid>
                <Navbar.Brand as={Link} to="/" id="navbar-brand">
                    <img src={ss_logo} alt="SafeSpace Logo" id="ss-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="align-items-center flex-column flex-lg-row">
                        <Nav.Link as={Link} to="/seeking-dashboard">
                            Therapists
                        </Nav.Link>
                        <Nav.Link as={Link} to="/seeking-peer-support">
                            Peer Supporters
                        </Nav.Link>
                        <Nav.Link as={Link} to="/seeking-messages">
                            Chats
                        </Nav.Link>

                        <NavDropdown title="Account" id="nav-dropdown-account">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SeekingNav;
