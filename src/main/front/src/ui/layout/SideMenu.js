import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
    {
        title: "Board",
        href: "/board",
        icon: "bi bi-layout-split",
    },
    {
        title: "User",
        href: "/user",
        icon: "bi bi-textarea-resize",
    },
    {
        title: "News",
        href: "/news",
        icon: "bi bi-people",
    },
    {
        title: "Map",
        href: "/map",
        icon: "bi bi-textarea-resize",
    },
    {
        title: "About",
        href: "/about",
        icon: "bi bi-people",
    },
];

const SideMenu = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();

    return (
        <div className="p-3">
            <div className="d-flex align-items-center">
                <span className="ms-auto d-lg-none">
        <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
        ></Button>
        </span>
            </div>
            <div className="pt-4 mt-2">
                <Nav vertical className="sidebarNav">
                    {navigation.map((navi, index) => (
                        <NavItem key={index} className="sidenav-bg">
                            <Link
                                to={navi.href}
                                className={
                                    location.pathname === navi.href
                                        ? "text-primary nav-link py-3"
                                        : "nav-link text-secondary py-3"
                                }
                            >
                                <i className={navi.icon}></i>
                                <span className="ms-3 d-inline-block">{navi.title}</span>
                            </Link>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    );
};

export default SideMenu;
