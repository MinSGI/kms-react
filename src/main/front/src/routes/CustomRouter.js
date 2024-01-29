import React from 'react';
import { lazy } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = lazy(() => import("../pages/Main.js"));
const Sub = lazy(() => import("../pages/Sub.js"));
const About = lazy(() => import("../pages/About.js"));

const CustomRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sub" element={<Sub />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default CustomRouter;
