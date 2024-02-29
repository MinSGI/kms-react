import React, {useEffect, useRef, useState} from 'react';
import {useScript} from "../../hooks/useScript";
import {Card, CardBody, CardTitle} from "reactstrap";
import "./my-location-btn.css";
import ChargeInfo from "./ChargeInfo";
import RegionCode from "./RegionCode";

const MapAPI = () => {
    const status = useScript("https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ri00dgoh9t&submodules=geocoder");
    const [neLat, setNeLat] = useState();
    const [neLng, setNeLng] = useState();
    const [swLat, setSwLat] = useState();
    const [swLng, setSwLng] = useState();

    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [nowLat, setNowLat] = useState();
    const [nowLng, setNowLng] = useState();
    const nvRef = useRef(null);
    const infoWindowRef = useRef(null);

    let map = null;
    let infoWindow = null;

    useEffect(() => {
        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(function (pos) {
                setLat(pos.coords.latitude);
                setLng(pos.coords.longitude);
                setNowLat(pos.coords.latitude);
                setNowLng(pos.coords.longitude);
            });
        };
        getLocation();
    }, []);

    useEffect(() => {
        console.log("now lat data : ", lat);
        console.log("now lng data : ", lng);
    }, [lat, lng])

    useEffect(() => {
        if(status === "ready"){
            const nv = window.naver.maps;

            map = new nv.Map('map', {
                scaleControl: false,
                mapDataControl: true,
                zoomControl: true,
                zoomControlOptions: {
                    style: nv.ZoomControlStyle.SMALL,
                    position: nv.Position.LEFT_BOTTOM
                },
                maxZoom:18,
                minZoom:12,
                center: new nv.LatLng(lat, lng),
            });

            // 현재 위치 마커
            // const maker = nv.Marker({
            //     position: new nv.LatLng(nowLat, nowLng),
            //     map: map
            // });

            // 현재 내 위치 버튼
            const locationBtnHtml = `<a class="my-location-button"><span class="target"></span></a>`
            nv.Event.once(map, 'init', function() {
                var customControl = new nv.CustomControl(locationBtnHtml, {
                    position: nv.Position.LEFT_BOTTOM
                });

                customControl.setMap(map);

                nv.Event.addDOMListener(customControl.getElement(), 'click', function() {
                    map.setCenter(new nv.LatLng(nowLat, nowLng));
                });
            });

            nv.Event.addListener(map, 'dragend', function() {
                const bounds = map.getBounds(); // 현재 지도의 경계 상자 정보를 가져옴
                const northEast = bounds.getNE(); // 북동쪽 점의 좌표를 가져옴
                const southWest = bounds.getSW(); // 남서쪽 점의 좌표를 가져옴
                setSwLat(southWest.y);
                setSwLng(southWest.x);
                setNeLat(northEast.y);
                setNeLng(northEast.x);
            });
            nvRef.current = nv;
            infoWindowRef.current = new window.naver.maps.InfoWindow({anchorSkew:true})
        }
    }, [status]);

    const searchCoordinateToAddress = (inputLat, inputLng) => {
        if (inputLat !== undefined && inputLng !== undefined && nvRef.current != null) {
            infoWindowRef.current.close();

            nvRef.current.Service.reverseGeocode({
                coords: new nvRef.current.LatLng(inputLat, inputLng),
            }, function (status, response) {
                if (status !== nvRef.current.Service.Status.OK) {
                    return alert('Something wrong!');
                }

                const items = response.v2.results;
                let address = '';
                let htmlAddresses = [];

                for (var i=0, ii=items.length, item, addrType; i<ii; i++) {
                    item = items[i];
                    address = makeAddress(item) || '';
                    addrType = item.name === 'roadaddr' ? '[도로명 주소]' : '[지번 주소]';

                    htmlAddresses.push((i+1) +'. '+ addrType +' '+ address);
                }

                infoWindowRef.current.setContent([
                    '<div style="padding:10px;min-width:200px;line-height:150%;">',
                    '<h4 style="margin-top:5px;">검색 좌표</h4><br />',
                    htmlAddresses.join('<br />'),
                    '</div>'
                ].join('\n'));

                infoWindowRef.current.open(map, new nvRef.current.LatLng(inputLat, inputLng));

                let metroCd = '';
                if (items && items.length > 0) {
                    metroCd = items[0].region.area1.name;
                    ChargeInfo(RegionCode(metroCd)).then(r => {
                        console.log("r : ", r)
                    });
                }
            });
        }
    }

    const searchAddressToCoordinate = (address) => {
        window.naver.maps.Service.geocode({
            query: address
        }, function(status, response) {
            if (status === window.naver.maps.Service.Status.ERROR) {
                return alert('Something Wrong!');
            }

            if (response.v2.meta.totalCount === 0) {
                return alert('totalCount' + response.v2.meta.totalCount);
            }

            var htmlAddresses = [],
                item = response.v2.addresses[0],
                point = new window.naver.maps.Point(item.x, item.y);

            if (item.roadAddress) {
                htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
            }

            if (item.jibunAddress) {
                htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
            }

            if (item.englishAddress) {
                htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
            }

            infoWindowRef.current.setContent([
                '<div style="padding:10px;min-width:200px;line-height:150%;">',
                '<h4 style="margin-top:5px;">검색 주소 : '+ address +'</h4><br />',
                htmlAddresses.join('<br />'),
                '</div>'
            ].join('\n'));

            map.setCenter(point);
            infoWindowRef.current.open(map, point);
        });
    }

    useEffect(() => {
        console.log("sw");
        searchCoordinateToAddress(swLat, swLng);
    }, [swLat, swLng, nvRef.current])

    useEffect(() => {
        console.log("ne");
        searchCoordinateToAddress(neLat, neLng);
    }, [neLat, neLng, nvRef.current])

    function makeAddress(item) {
        if (!item) {
            return;
        }

        var name = item.name,
            region = item.region,
            land = item.land,
            isRoadAddress = name === 'roadaddr';

        var sido = '', sigugun = '', dongmyun = '', ri = '', rest = '';

        if (hasArea(region.area1)) {
            sido = region.area1.name;
        }

        if (hasArea(region.area2)) {
            sigugun = region.area2.name;
        }

        if (hasArea(region.area3)) {
            dongmyun = region.area3.name;
        }

        if (hasArea(region.area4)) {
            ri = region.area4.name;
        }

        if (land) {
            if (hasData(land.number1)) {
                if (hasData(land.type) && land.type === '2') {
                    rest += '산';
                }

                rest += land.number1;

                if (hasData(land.number2)) {
                    rest += ('-' + land.number2);
                }
            }

            if (isRoadAddress === true) {
                if (checkLastString(dongmyun, '면')) {
                    ri = land.name;
                } else {
                    dongmyun = land.name;
                    ri = '';
                }

                if (hasAddition(land.addition0)) {
                    rest += ' ' + land.addition0.value;
                }
            }
        }

        return [sido, sigugun, dongmyun, ri, rest].join(' ');
    }

    function hasArea(area) {
        return !!(area && area.name && area.name !== '');
    }

    function hasData(data) {
        return !!(data && data !== '');
    }

    function checkLastString (word, lastString) {
        return new RegExp(lastString + '$').test(word);
    }

    function hasAddition (addition) {
        return !!(addition && addition.value);
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
