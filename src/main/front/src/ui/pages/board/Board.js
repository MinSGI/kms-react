import React from 'react';
import {Outlet} from "react-router-dom";

const Board = () => {
    return (
        <div>
            board Area
            <Outlet/>
        </div>
    );
};

export default Board;
