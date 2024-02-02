import axios from 'axios';

const NaverNewsAPI = async (query, sort, display) => {
    try {
        const url = `/v1/search/news.json?query=${query}&sort=${sort}&display=${display}`;
        const apiKey = 'PwA3g7rg7brtYe29mPQr';
        const secretApiKey = 'MkU0LOXXvm';
        const header = {
            'X-Naver-Client-Id': apiKey,
            'X-Naver-Client-Secret': secretApiKey,
        }
        const response = await axios.get(url, {headers:header});

        return response.data.items;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};

export default NaverNewsAPI;
