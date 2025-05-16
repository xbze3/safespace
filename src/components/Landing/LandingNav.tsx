import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ss_logo from "../../assets/safe-space-logo.svg";

import "../../css/NavBar.css";

function LandingNav() {
    return (
        <Navbar
            expand="lg"
            className="nav-navy"
            data-bs-theme="dark"
            collapseOnSelect
        >
            <Container fluid>
                <Navbar.Brand as={Link} to="/" id="navbar-brand">
                    <img src={ss_logo} alt="SS LOGO" id="ss-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="align-items-center flex-column flex-lg-row">
                        <Nav.Link as={Link} to="/login" id="landing-login">
                            Login
                        </Nav.Link>

                        {/* <Nav.Link as={Link} to="/signup" id="landing-signup">
                            Seek Help
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LandingNav;
