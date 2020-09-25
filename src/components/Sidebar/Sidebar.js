import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="main-menu">
                <li className="menu-item">
                    <a href="#">Profile</a>
                </li>
                <li className="menu-item">
                    <a href="#">Messages</a>
                </li>
                <li className="menu-item">
                    <a href="#">News</a>
                </li>
                <li className="menu-item">
                    <a href="#">Music</a>
                </li>
                <li className="menu-item">
                    <a href="#">Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;