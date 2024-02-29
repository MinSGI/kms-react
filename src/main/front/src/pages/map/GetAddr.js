import axios from "axios";
import RegionCode from "./RegionCode";
import ChargeInfo from "./ChargeInfo";

const GetAddr = async ( latitude, longitude ) => {
    const clientId = 'ri00dgoh9t';
    const clientSecret = 'XdlZ12YQ2t5My6XBelqsVJAAx2i6DFsuIgwtc4Hz';
    const apiUrl = `/map-reversegeocode/v2/gc?coords=${longitude},${latitude}&output=json&orders=addr`;

    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': clientId,
                'X-NCP-APIGW-API-KEY': clientSecret
            }
        });
        const data = response.data;
        return ChargeInfo(RegionCode(data.results[0].region.area1.name));
    } catch (error) {
        console.error('Error fetching address:', error);
        throw error; // 예외를 다시 throw하여 호출자에게 에러를 전파합니다.
    }
};

export default GetAddr;