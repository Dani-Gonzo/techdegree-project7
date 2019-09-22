import React from 'react';
import PhotoContainer from './PhotoContainer';
import {Route, NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="main-nav">
            <ul>
                <li><NavLink to={"/turtles"}>Turtles</NavLink></li>
                <li><NavLink to={"/cats"}>Cats</NavLink></li>
                <li><NavLink to={"/ocean"}>Ocean</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;