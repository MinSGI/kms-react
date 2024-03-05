import RegionCodeAPI from "service/api/kepco/RegionCodeAPI";
import EvChargeInfoAPI from "service/api/kepco/EvChargeInfoAPI";
import addressToCoordinate from "./AddressToCoordinate";

const CoordinateToAddress = async (nv, lt, lg) => {
    try {
        return await new Promise((resolve, reject) => {
            nv.Service.reverseGeocode({
                coords: new nv.LatLng(lt, lg),
            }, async function (status, response) {
                if (status !== nv.Service.Status.OK) {
                    reject('Coordinate Something wrong!');
                }
                const items = response.v2.results;
                let metroNm = '';
                let cityNm = '';
                if (items && items.length > 0) {
                    metroNm = items[0].region.area1.name;
                    cityNm = items[0].region.area2.name;
                    const addressCode = await RegionCodeAPI(metroNm, cityNm);
                    const chargeInfoResponse = await EvChargeInfoAPI(addressCode.uppoCd, addressCode.code)
                    const data = chargeInfoResponse.data;
                    if (data && data.length > 0) {
                        for (let i = 0; i < data.length; i++) {
                            const coordinate = await addressToCoordinate(nv, data[i].stnAddr);
                            if (coordinate && coordinate.y && coordinate.x) {
                                data[i].lat = coordinate.y;
                                data[i].lng = coordinate.x;
                            }
                        }
                        let key = metroNm + cityNm;
                        resolve({key: key, data: data});
                    }
                }
            });
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default CoordinateToAddress;