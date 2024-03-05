import axios from "axios";

let cacheData = [];

const RegionCodeAPI = async (metroNm, cityNm) => {
    let codeData = {};

    if(cacheData == null || cacheData.length === 0) {
        const apiUrl = `/openapi/v1/commonCode.do?apiKey=${process.env.REACT_APP_EV_CHARGE_INFO_API_KEY}&codeTy=cityCd&returnType=json`;

        await axios.get(apiUrl)
            .then(response => {
                cacheData = response.data.data;
            })
            .catch(error => {
                console.error('Error :', error);
            });
    }

    if(metroNm != null && cityNm != null) {
        for(let i = 0; i < cacheData.length; i++){
            if(cacheData[i].codeNm === cityNm && cacheData[i].uppoCdNm === metroNm){
                codeData = {'code' : cacheData[i].code, 'uppoCd' : cacheData[i].uppoCd}
                break;
            }
        }
    }

    return codeData;
};

export default RegionCodeAPI;
