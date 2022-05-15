import React from 'react';
import s from "./Main.module.css"


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <div className={s.mainGreeting}>
                    <span>Hi there</span>
                    <h1>I am Vladislav Bulynko</h1>
                    <p>A FRONT-END DEVELOPER</p>
                </div>
                <div className={s.mainPhoto}></div>
            </div>

        </div>
    );
};

export default Main;