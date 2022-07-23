import React from 'react';
import s from './Nav.module.css'
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.menuList}>
                <li>
                    <Link to="main"
                          className={s.link}
                          activeClass={s.activeLink}
                          spy={true}
                          smooth={true}
                          offset={1}
                          duration={500}>
                        Main
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                          className={s.link}
                          activeClass={s.activeLink}
                          spy={true}
                          smooth={true}
                          offset={-50}
                          duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects"
                          className={s.link}
                          activeClass={s.activeLink}
                          spy={true}
                          smooth={true}
                          offset={1}
                          duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contacts"
                          className={s.link}
                          activeClass={s.activeLink}
                          spy={true}
                          smooth={true}
                          offset={1}
                          duration={500}>
                        Contacts
                    </Link>
                </li>
            </ul>


        </nav>
    );
};

export default Nav;