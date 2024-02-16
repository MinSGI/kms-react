import React, { lazy } from "react";
import {Route, Routes} from "react-router-dom";

/****Layouts*****/
const Main = lazy(() => import("../pages/Main.js"));

/***** Pages ****/

const About = lazy(() => import("../pages/About.js"));
const User = lazy(() => import("../pages/user/User"));
const Board = lazy(() => import("../pages/board/Board"));
const News = lazy(() => import("../pages/news/News"));
const NewsPage1 = lazy(() => import("../pages/news/component/News"));
const NewsPage2 = lazy(() => import("../pages/news/component/NaverNews"));

const NotFound = lazy(() => import("../pages/NotFound"));

/*****Routes******/

const CustomRouter = [
    {
        path: "/",
        exact:true,
        element: <Main />,
        children: [
            { path: "*", element: <NotFound /> },
            { path: "board", element: <Board/> },
            { path: "user",  element: <User /> },
            {
                path: "news",
                exact: true,
                index: <NewsPage1 />,
                element: <News />,
                children: [
                    {path: "page1", element: <NewsPage1 />},
                    {path: "page2", element: <NewsPage2 />},
                ]
            },
            { path: "about", element: <About /> },
            { path: "page1", element: <NewsPage1 /> },
        ],
    },
];

// const CustomRouter = [
//     { path:"*", element: <NotFound /> },
//     { path:"/", element: <Main /> },
//     { path:"/board", element: <Board /> },
//     { path:"/news", element: <News /> },
// ]

export default CustomRouter;
