import React from 'react';
import s from "./Footer.module.css"
import tgIcon from './../assets/images/icons8-telegram-app.svg'
import inIcon from './../assets/images/icons8-linkedin-50.svg'
import facebookIcon from './../assets/images/icons8-facebook.svg'
import vkIcon from './../assets/images/icons8-vkontakte-48.png'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h3>Vladislav Bulynko</h3>
                <div className={s.socialsContainer}>
                    <div className={s.socialIcon}>
                        <a href="https://t.me/vladBool">
                            <img src={tgIcon} alt=""/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href="https://www.linkedin.com/in/vladislav-bulynko-091959226/">
                            <img src={inIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span>All Rights Reserved</span>


            </div>

        </div>
    );
};

export default Footer;