import axios from 'axios';

const NaverNewsAPI = async (query, sort, display, start) => {
    const apiUrl = '/v1/search/news.json';
    const apiKey = 'PwA3g7rg7brtYe29mPQr';
    const secretApiKey = 'MkU0LOXXvm';
    const header = {
        'X-Naver-Client-Id': apiKey,
        'X-Naver-Client-Secret': secretApiKey,
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
