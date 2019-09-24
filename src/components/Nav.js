import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to={"/turtles"}>Turtles</NavLink></li>
                <li><NavLink to={"/cats"}>Cats</NavLink></li>
                <li><NavLink to={"/ocean"}>Ocean</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;