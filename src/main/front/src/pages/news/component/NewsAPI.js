import AxiosCustom from "../../../utils/AxiosCustom";
import {useState} from "react";

const NewsAPI = (country, category, sources, q, pageSize, page) => {
    const [data, setData] = useState(null);
    const apiKey = '5c30efa1dd134641baf0b37092e35245';
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    const params = {
        apiKey: apiKey,
        country: country,
        category: category,
        sources: sources,
        q: q,
        pageSize: pageSize ? pageSize : 'null',
        page: page ? page : 'null'
    };

    AxiosCustom(`${apiUrl}`, 'get', params).then((response) => {
        console.log('Data:', response.data);
        setData(response.data.articles);
    }).catch((error) => {
        console.error('Error:', error);
    });

    return data;
};

export default NewsAPI;