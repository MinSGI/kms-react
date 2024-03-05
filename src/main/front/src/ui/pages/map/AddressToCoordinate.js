const AddressToCoordinate = async (nv, address) => {
    try {
        return await new Promise((resolve, reject) => {
            nv.Service.geocode({
                query: address
            }, function (status, response) {
                if (status !== nv.Service.Status.OK) {
                    reject('Address Something wrong!');
                } else {
                    resolve(response.v2.addresses[0]);
                }
            });
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default AddressToCoordinate;