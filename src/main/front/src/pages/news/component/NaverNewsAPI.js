import axios from 'axios';
import AxiosCustom from "../../../utils/AxiosCustom";

const NaverNewsAPI = async (query, sort, display, start) => {
    try {
        const apiUrl = 'https://openapi.naver.com/v1/search/news.json';
        const apiKey = '5c30efa1dd134641baf0b37092e35245';
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
        const response = await AxiosCustom(apiUrl, 'get', params, {header:header});
        console.log("ddddddddddddddddddddddddddddddddddddddddddddd" + response);
        return response.data.items;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export default NaverNewsAPI;
