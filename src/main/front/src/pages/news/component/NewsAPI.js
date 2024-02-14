import AxiosCustom from "../../../utils/AxiosCustom";

const NewsAPI = async ({ country, category, sources, q, pageSize, page }) => {
    try {
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
        const response = await AxiosCustom(apiUrl, 'get', params);
        console.log('Data:', response.data);
        return response.data.articles;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

export default NewsAPI;