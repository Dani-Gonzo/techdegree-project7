import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

    let searchTag = e => {
        props.onSearch(e.target.innerText);
    }

    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to={"/search/sea_turtles"} onClick={searchTag}>Sea Turtles</NavLink></li>
                <li><NavLink to={"/search/cats"} onClick={searchTag}>Cats</NavLink></li>
                <li><NavLink to={"/search/matcha_tea"} onClick={searchTag}>Matcha Tea</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;