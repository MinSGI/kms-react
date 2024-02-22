import React from "react";
import CustomRouter from "./routes/CustomRouter";
import SideMenu from "./layout/SideMenu";
import Header from "./layout/Header";
import {Container} from "reactstrap";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <main>
            <div className="pageWrapper d-lg-flex">
                {/********Sidebar**********/}
                <aside className="sidebarArea shadow" id="sidebarArea">
                    <SideMenu/>
                </aside>
                {/********Content Area**********/}

                <div className="contentArea">
                    {/********header**********/}
                    <Header/>
                    {/********Middle Content**********/}
                    <Container className="p-4 wrapper" fluid>
                        <CustomRouter/>
                        <Outlet />
                    </Container>
                </div>
            </div>
        </main>
    );
};

export default App;