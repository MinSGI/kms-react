import axios from "axios";

const NewsAPI = async ({ country, category, sources, q, pageSize, page }) => {
    const apiUrl = '/v2/top-headlines';
    const params = {
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
        country: country,
        category: category,
        sources: sources,
        q: q,
        pageSize: pageSize ? pageSize : 'null',
        page: page ? page : 'null'
    };
    return axios.get(apiUrl, {params:params})
        .then(res => {return res})
        .catch(e => {console.error('Error : ', e)});
};

export default NewsAPI;