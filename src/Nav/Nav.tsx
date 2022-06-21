import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menuList}>
                <li className={s.menuItem}>
                    <a className={s.menuLink} href="#">Main</a>
                </li>
                <li>
                    <a href="#">Skills</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
            </ul>




        </nav>
    );
};

export default Nav;