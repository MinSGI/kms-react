import React from 'react';
import {Card, CardBody, CardTitle, Col, Row, Table} from "reactstrap";
import BoardUseState from "./BoardUseState";
import {Link, Outlet} from "react-router-dom";

const Board = () => {
    return (
        <div>
            board Area
            <Outlet/>
        </div>
    );
};

export default Board;
