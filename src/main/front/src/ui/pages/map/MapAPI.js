import React, {useEffect, useRef, useState} from 'react';
import {useScript} from "hooks/useScript";
import {Card, CardBody, CardTitle} from "reactstrap";
import "assets/css/my-location-btn.css";
import NowLocation from "./NowLocation";
import NowPosBtn from "./NowPosBtn";
import CoordinateToAddress from "./CoordinateToAddress";

const MapAPI = () => {
    // 네이버 지도 JS 파일 Include
    const status = useScript(`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_CLIENT_ID}&submodules=geocoder`);

    // 다른 함수에서 값을 참조하기 위한 Ref
    const nvRef = useRef();

    // 다른 함수에서 선언된 map값을 참조하기 위한 Ref
    const mapRef = useRef();

    // 충전소 정보 캐싱
    const [cacheData, setCacheData] = useState({});

    let markers = [],
        infoWindows = [];

    // 보이는 영역 마커 처리
    useEffect(() => {
        for (const key in cacheData) {
            for(let i = 0; i < cacheData[key].length; i++){
                let position = new nvRef.current.LatLng(cacheData[key][i].lat, cacheData[key][i].lng);

                let marker = new nvRef.current.Marker({
                    map: mapRef.current,
                    position: position,
                    zIndex: 100
                });

                let infoWindow = new nvRef.current.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b>"'+ key + ', ' + i +'"</b>.</div>'
                });

                markers.push(marker);
                infoWindows.push(infoWindow);
            }
        }
    }, [cacheData])

    // 네이버 지도 setting
    useEffect(() => {
        const fetchData = async () => {
            if (status === "ready") {
                // 공통 부분 선언
                const nv = window.naver.maps;

                // 현재 좌표 설정
                const nowLocation = await NowLocation();
                const nowLat = nowLocation.lat;
                const nowLng = nowLocation.lng;

                // 네이버 지도 옵션
                const mapOption = {
                    scaleControl: false,
                    mapDataControl: true,
                    zoomControl: true,
                    zoomControlOptions: {
                        style: nv.ZoomControlStyle.SMALL,
                        position: nv.Position.LEFT_BOTTOM
                    },
                    maxZoom: 18,
                    minZoom: 14,
                    center: new nv.LatLng(nowLat, nowLng),
                }

                // 네이버 지도 선언(id = map)
                const newMap = new nv.Map('map', mapOption);

                // 현재 내 위치 버튼
                nv.Event.once(newMap, 'init', function () {
                    NowPosBtn(nv,newMap,nowLat,nowLng);
                });

                // 지도 드래그 시 처리
                nv.Event.addListener(newMap, 'dragend', async function () {
                    // 지도 이동 시 좌표값에 해당하는 시에 설치된 충전소 목록 불러옴
                    const cta = await CoordinateToAddress(nvRef.current, newMap.getCenter()._lat, newMap.getCenter()._lng)
                    if (cta != null) {
                        console.log("cta : ", cta);
                        setCacheData({[cta.key]: cta.data});
                        console.log("cacheData : ", cacheData);
                    }
                });

                // 보이는 영역에 마커 표시
                nv.Event.addListener(newMap, 'idle', function () {
                    updateMarkers(newMap, markers);
                });

                nvRef.current = nv;
                mapRef.current = newMap;
            }
        }
        fetchData();
    }, [status]);

    // 마커 클릭 시 이벤트 처리
    useEffect(() => {
        for (let i=0, ii=markers.length; i<ii; i++) {
            nvRef.current.Event.addListener(markers[i], 'click', getClickHandler(i));
        }
    }, [markers])

    function updateMarkers(map, markers) {
        const mapBounds = map.getBounds();
        let marker, position;

        for (let i = 0; i < markers.length; i++) {
            marker = markers[i]
            position = marker.getPosition();

            if (mapBounds.hasLatLng(position)) {
                showMarker(map, marker);
            } else {
                hideMarker(map, marker);
            }
        }
    }

    function showMarker(map, marker) {
        if (marker.getMap()) return;
        marker.setMap(map);
    }

    function hideMarker(map, marker) {
        if (!marker.getMap()) return;
        marker.setMap(null);
    }

    // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러
    function getClickHandler(seq) {
        return function(e) {
            var marker = markers[seq],
                infoWindow = infoWindows[seq];

            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(mapRef.current, marker);
            }
        }
    }

    return (
        <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                충전소 위치
            </CardTitle>
            <CardBody className="">
                    <div className='map' id='map' style={{width:"100%", minHeight:"500px"}}>
                    </div>
            </CardBody>
        </Card>

    );
};

export default MapAPI;
