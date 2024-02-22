import React, { lazy } from "react";
import {Route, Routes} from "react-router-dom";

/****Layouts*****/
const Main = lazy(() => import("../pages/Main.js"));

/***** Pages ****/

const About = lazy(() => import("../pages/About.js"));
const User = lazy(() => import("../pages/user/User"));

const Board = lazy(() => import("../pages/board/Board"));
const BoardList = lazy(() => import("../pages/board/List"));
const BoardWrite = lazy(() => import("../pages/board/Write"));
const BoardDetail = lazy(() => import("../pages/board/Detail"));
const BoardUseState = lazy(() => import("../pages/board/BoardUseState"));

const News = lazy(() => import("../pages/news/News"));
const NewsPage1 = lazy(() => import("../pages/news/component/News"));
const NewsPage2 = lazy(() => import("../pages/news/component/NaverNews"));

const NotFound = lazy(() => import("../pages/NotFound"));

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
                <Route path="useState" element={<BoardUseState />} />
            </Route>
            <Route path="/board/boardDetail" element={<BoardDetail />} />
            <Route path="/news" element={<News />}>
                <Route path="page1" element={<NewsPage1 />} />
                <Route path="page2" element={<NewsPage2 />} />
            </Route>
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default CustomRouter;