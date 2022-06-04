import React from 'react';

import classes from "./menu.module.css"

import {Link, NavLink} from "react-router-dom";

function Menu () {
    return (
        <ul className={classes.menu}>

            <li><NavLink className={classes.link} to="/first">FirstPage</NavLink></li>
            <li><NavLink className={classes.link} to="/second">SecondPage</NavLink></li>
            <li><NavLink className={classes.link} to="/third">ThirdPage</NavLink></li>

        </ul>
    );
}

export default Menu;