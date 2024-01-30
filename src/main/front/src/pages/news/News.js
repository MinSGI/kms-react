import React from 'react';
import Sort from "./component/Sort";
import List from "./component/List";
import Search from "./component/Search";

const News = () => {
    return (
        <div>
            <Search />
            <Sort />
            <List />
        </div>
    );
};

export default News;
