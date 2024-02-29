import React, {useEffect, useState} from 'react';
import {useScript} from "../../hooks/useScript";
import {Card, CardBody, CardTitle, Container} from "reactstrap";
import "./my-location-btn.css";
import MapAPI from "./MapAPI";

const Map = () => {

    return (
        <MapAPI />
    );
};

export default Map;
