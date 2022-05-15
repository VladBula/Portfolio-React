import React from 'react';
import s from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <h3>Vladislav Bulynko</h3>
                <div className={s.socialsContainer}>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                    <div className={s.social}></div>
                </div>
                <span>All Rights Reserved</span>


            </div>

        </div>
    );
};

export default Footer;