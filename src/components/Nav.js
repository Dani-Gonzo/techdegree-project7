import React from 'react';
import {Route, NavLink} from 'react-router-dom';

const Nav = ({match}) => {
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