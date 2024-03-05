import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    Button,
} from "reactstrap";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const Handletoggle = () => {
        setIsOpen(!isOpen);
    };
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    return (
        <Navbar color="primary" dark expand="md">
            <div className="d-flex align-items-center">
                <Button
                    color="primary"
                    className="d-lg-none"
                    onClick={() => showMobilemenu()}
                >
                    <i className="bi bi-list"></i>
                </Button>
            </div>
            <div className="hstack gap-2">
                <Button
                    color="primary"
                    size="sm"
                    className="d-sm-block d-md-none"
                    onClick={Handletoggle}
                >
                    {isOpen ? (
                        <i className="bi bi-x"></i>
                    ) : (
                        <i className="bi bi-three-dots-vertical"></i>
                    )}
                </Button>
            </div>

            <Collapse navbar isOpen={isOpen}>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
