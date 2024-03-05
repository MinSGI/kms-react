import React, { lazy } from "react";
import {Route, Routes} from "react-router-dom";

/****Layouts*****/
const Main = lazy(() => import("../../ui/pages/Main.js"));

/***** Pages ****/

const About = lazy(() => import("../../ui/pages/About.js"));
const User = lazy(() => import("../../ui/pages/user/User"));

const Board = lazy(() => import("../../ui/pages/board/Board"));
const BoardList = lazy(() => import("../../ui/pages/board/List"));
const BoardWrite = lazy(() => import("../../ui/pages/board/Write"));
const BoardDetail = lazy(() => import("../../ui/pages/board/Detail"));

const Map = lazy(() => import("../../ui/pages/map/Map"));

const News = lazy(() => import("../../ui/pages/news/News"));
const NewsPage1 = lazy(() => import("../../ui/pages/news/component/News"));
const NewsPage2 = lazy(() => import("../../ui/pages/news/component/NaverNews"));

const NotFound = lazy(() => import("../../ui/pages/NotFound"));

/*****Routes******/
const CustomRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="/board" element={<Board />}>
                <Route index element={<BoardList />} />
                <Route path="write" element={<BoardWrite />} />
                <Route path="detail" element={<BoardDetail />} />
            </Route>
            <Route path="/map" element={<Map />} />
            <Route path="/news" element={<News />}>
                <Route path="page1" element={<NewsPage1 />} />
                <Route path="page2" element={<NewsPage2 />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default CustomRouter;