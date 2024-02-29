import axios from "axios";

const cacheData = {};

const ChargeInfo = async (metroCd) => {
    const apiKey = 'STl2XoT6x267T5z30A10sr8P3icl3oIVU3zKLbrb';
    const apiUrl = `/openapi/v1/EVcharge.do?apiKey=${apiKey}&metroCd=${metroCd}&returnType=json`;

    if(cacheData[metroCd]) {
        console.log("cacheData");
        return cacheData[metroCd];
    }

    return await axios.get(apiUrl)
        .then(response => {
            console.log("api Data");
            cacheData[metroCd] = response.data;
            return response.data;
        })
        .catch(error => {
            console.error('Error :', error);
        });
};

export default ChargeInfo;
