import useAxios from "../../../utils/useAxios";
import {useEffect, useState} from "react";

const NewsAPI = (country, category, sources, q, pageSize, page) => {
    const apiKey = '5c30efa1dd134641baf0b37092e35245';
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    const params = {
        method: 'get',
        apiKey: apiKey,
        country: country,
        category: category,
        sources: sources,
        q: q,
        pageSize: pageSize ? pageSize : 'null',
        page: page ? page : 'null'
    }
    const {data:resData, error:setResData} = useAxios(apiUrl, params);

    return <div></div>;
};

export default NewsAPI;
