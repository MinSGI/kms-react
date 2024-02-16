import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";

const News = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/news') {
            navigate('/news/page1');
        }
    }, [location]);
    return (
        <div>
            <Link to="/news/page1">
                <button className="btn btn btn-outline-primary">openAPI News</button>
            </Link>
            <Link to="/news/page2">
                <button className="btn btn btn-outline-success">Naver News</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export default News;
