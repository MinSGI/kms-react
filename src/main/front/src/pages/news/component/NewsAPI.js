import axios from "axios";

const NewsAPI = async ({ country, category, sources, q, pageSize, page }) => {
    const apiUrl = '/v2/top-headlines';
    const apiKey = '5c30efa1dd134641baf0b37092e35245';
    const params = {
        apiKey: apiKey,
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