const NowPosBtn = (nv, map, lat, lng) => {
    const locationBtnHtml = `<a class="my-location-button"></a>`
    let customControl = new nv.CustomControl(locationBtnHtml, {
        position: nv.Position.LEFT_BOTTOM
    });

    customControl.setMap(map);

    // 버튼 클릭 시 이벤트 처리 - 처음에 적용한 위치로 이동
    nv.Event.addDOMListener(customControl.getElement(), 'click', function() {
        map.setCenter(new nv.LatLng(lat, lng));
    });
};

export default NowPosBtn;
