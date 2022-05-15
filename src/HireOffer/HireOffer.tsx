import React from 'react';
import s from "./HireOffer.module.css"

const HireOffer = () => {
    return (
        <div className={s.hireMeBlock}>
            <div className={s.container}>

                <span className={s.text}>Looking into remote work options</span>
                <div className={s.hireButton}>
                    <a href="#">Hire me</a>
                </div>

            </div>

        </div>
    );
};

export default HireOffer;