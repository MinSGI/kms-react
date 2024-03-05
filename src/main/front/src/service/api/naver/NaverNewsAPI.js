import axios from 'axios';

const NaverNewsAPI = async (query, sort, display, start) => {
    const apiUrl = '/v1/search/news.json';
    const header = {
        'X-Naver-Client-Id': process.env.REACT_APP_NAVER_NEWS_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_NEWS_SECRET_KEY,
    }
    const params = {
        query: query,
        sort: sort,
        display: display,
        start: start,
    };
    return axios.get(apiUrl, {params:params, headers:header})
        .then(res => {return res.data;})
        .catch(e => {console.error('Error : ', e)})
};

export default NaverNewsAPI;
