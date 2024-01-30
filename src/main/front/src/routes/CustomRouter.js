import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const Main = lazy(() => import("../pages/Main.js"));

/***** Pages ****/

const About = lazy(() => import("../pages/About.js"));
const User = lazy(() => import("../pages/user/User"));
const Board = lazy(() => import("../pages/board/Board"));
const News = lazy(() => import("../pages/news/News"));

/*****Routes******/

const CustomRouter = [
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/board", exact: true, element: <Board /> },
            { path: "/user", exact: true, element: <User /> },
            { path: "/news", exact: true, element: <News /> },
            { path: "/about", exact: true, element: <About /> },
        ],
    },
];

export default CustomRouter;
