import NaverMapAPI from "service/api/naver/NaverMapAPI";
import {Card, CardBody, CardTitle} from "reactstrap";
import React from "react";

const Index = () => {
    return (
        <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                충전소 위치
            </CardTitle>
            <CardBody className="">
                <div className='map' id='map' style={{width:"100%", minHeight:"500px"}}>
                    <NaverMapAPI mapId="map" />
                </div>
            </CardBody>
        </Card>
    );
};

export default Index;
