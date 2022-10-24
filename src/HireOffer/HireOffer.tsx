import React from 'react';
import s from "./HireOffer.module.css"

const HireOffer = () => {
    return (
        <div className={s.hireMeBlock}>
            <div className={s.container}>

                <h2 className={s.text}>Looking into remote work options</h2>
                <div className={s.hireButton}>
                    <a href="https://www.linkedin.com/in/vladislav-bulynko-091959226/">Hire me</a>
                </div>

            </div>

        </div>
    );
};

export default HireOffer;