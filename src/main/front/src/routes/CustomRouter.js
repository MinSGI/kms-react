import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../layout/Header";
import SideMenu from "../layout/SideMenu";
import Main from "../pages/Main";
import Sub from "../pages/Sub";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import User from "../pages/user/User";
import Reg from "../pages/user/Reg";
import Upt from "../pages/user/Upt";

const CustomRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <SideMenu />
                    <Routes>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path="/" element={<Main />}></Route>
                        <Route path="/sub" element={<Sub />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/user" element={<User />}>

                            <Route path="/user/upt" element={<Upt />}></Route>
                        </Route>
                        <Route path="/user/reg" element={<Reg />}></Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default CustomRouter;
