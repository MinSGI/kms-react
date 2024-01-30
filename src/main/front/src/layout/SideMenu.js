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
                <li><Link to="/user"><h4>사용자 목록</h4></Link></li>
                <li><Link to="/user/reg"><h4>사용자 등록</h4></Link></li>
                <li><Link to="/user/upt"><h4>사용자 수정</h4></Link></li>
            </ul>
        </div>
    );
};

export default SideMenu;
