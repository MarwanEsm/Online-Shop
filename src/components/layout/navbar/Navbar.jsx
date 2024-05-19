import React from 'react';
import styles from "./Navbar.module.scss"
import { Link } from 'react-router-dom';


const Navbar = ({ items }) =>
    <div>
        <div className={styles.container}>
            <div>
                {items?.slice(0, 2).map((item, index) => <Link to={item.href} key={index}>{item.label}</Link>)}
            </div>

            <h2>Stay Safe .......... Stay Healthy</h2>

            <div>
                {items?.slice(2).map((item, index) => <Link to={item.href} key={index}>{item.label}</Link>)}
            </div>
        </div>
    </div>


export default Navbar;
