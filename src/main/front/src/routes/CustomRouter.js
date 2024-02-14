import React, { lazy } from "react";
import {Route, Routes} from "react-router-dom";

/****Layouts*****/
const Main = lazy(() => import("../pages/Main.js"));

/***** Pages ****/

const About = lazy(() => import("../pages/About.js"));
const User = lazy(() => import("../pages/user/User"));
const Board = lazy(() => import("../pages/board/Board"));
const News = lazy(() => import("../pages/news/News"));

const Wrapper = lazy(() => import("../pages/Wrapper"));

const NotFound = lazy(() => import("../pages/NotFound"));

/*****Routes******/

// const CustomRouter = [
//     {
//         path: "/sss",
//         exact:true,
//         element: <Main />,
//         children: [
//             { path: "*", element: <NotFound /> },
//             { path: "board", element: <Board/> },
//             { path: "user",  element: <User /> },
//             { path: "news", element: <News /> },
//             { path: "about", element: <About /> },
//         ],
//     },
// ];

// const CustomRouter = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Main />}></Route>
//             <Route path="/board" element={<Board />}></Route>
//             <Route path="/news" element={<News />}></Route>
//         </Routes>
//     )
// }

const CustomRouter = [
    { path:"*", element: <NotFound /> },
    { path:"/", element: <Main /> },
    { path:"/board", element: <Board /> },
    { path:"/news", element: <News /> },
]

export default CustomRouter;
