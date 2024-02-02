import React, {useState} from 'react';
import axios from "axios";

const NewsAPI = async () => {
    try {
        const apiKey = '5c30efa1dd134641baf0b37092e35245';
        const apiUrl = 'https://newsapi.org/v2/top-headlines';

        const newsData = await axios.get(`${apiUrl}?apiKey=${apiKey}&country=kr`);

        return newsData.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};

export default NewsAPI;
