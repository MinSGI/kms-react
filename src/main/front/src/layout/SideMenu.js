import React from 'react';
import {Link} from 'react-router-dom';

const SideMenu = () => {
    return (
        <div>
            SideMenu Area
            <ul>
                <li><Link to="/"><h4>Main</h4></Link></li>
                <li><Link to="/sub"><h4>Sub</h4></Link></li>
                <li><Link to="/about"><h4>About</h4></Link></li>
            </ul>
        </div>
    );
};

export default SideMenu;
