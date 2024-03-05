import axios from "axios";

const EvChargeInfoAPI = async (metroCd, cityCd) => {
    const apiUrl = `/openapi/v1/EVcharge.do?apiKey=${process.env.REACT_APP_EV_CHARGE_INFO_API_KEY}&metroCd=${metroCd}&cityCd=${cityCd}&returnType=json`;

    return await axios.get(apiUrl)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error :', error);
        });
};

export default EvChargeInfoAPI;
