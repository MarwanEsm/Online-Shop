import React from 'react';
import styles from "./Navbar.module.scss"


const Navbar = ({ items }) =>
    <div>
        <div className={styles.container}>
            <div>
                {items?.slice(0, 2).map((item, index) => <a href={item.href} key={index}>{item.label}</a>)}
            </div>

            <h2>Stay Safe .......... Stay Healthy</h2>

            <div>
                {items?.slice(2).map((item, index) => <a href={item.href} key={index}>{item.label}</a>)}
            </div>
        </div>
    </div>


export default Navbar;
