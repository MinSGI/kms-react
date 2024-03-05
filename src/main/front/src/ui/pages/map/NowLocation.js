const NowLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
            },
            function (error) {
                reject(error);
            }
        );
    });
};
export default NowLocation;
