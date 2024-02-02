import React, {useEffect, useState} from 'react';
import NaverNews from "./component/NaverNews";
import NewsAPI from "./component/News";

const News = () => {
    return (
        <div>
            <NewsAPI />
            <NaverNews />
        </div>
    );
};

export default News;
