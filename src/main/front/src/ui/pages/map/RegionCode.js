import axios from "axios";

const regionCodeArr = {
    '서울특별시': 11,
    '부산광역시': 21,
    '대구광역시': 22,
    '인천광역시': 23,
    '광주광역시': 24,
    '대전광역시': 25,
    '울산광역시': 26,
    '세종특별자치시': 29,
    '경기도': 31,
    '강원도': 32,
    '충청북도': 33,
    '충청남도': 34,
    '전라북도': 35,
    '전라남도': 36,
    '경상북도': 37,
    '경상남도': 38,
    '제주특별자치도': 39
};

let cacheData = [];

const RegionCode = async (metroNm, cityNm) => {
    let codeData = {};

    if(cacheData == null || cacheData.length === 0) {
        const apiKey = 'STl2XoT6x267T5z30A10sr8P3icl3oIVU3zKLbrb';
        const apiUrl = `/openapi/v1/commonCode.do?apiKey=${apiKey}&codeTy=cityCd&returnType=json`;

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

export default RegionCode;
