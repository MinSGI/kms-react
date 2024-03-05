import axios from "axios";

const ChargeInfo = async (metroCd, cityCd) => {
    const apiKey = 'STl2XoT6x267T5z30A10sr8P3icl3oIVU3zKLbrb';
    const apiUrl = `/openapi/v1/EVcharge.do?apiKey=${apiKey}&metroCd=${metroCd}&cityCd=${cityCd}&returnType=json`;

    return await axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error :', error);
        });
};

export default ChargeInfo;
