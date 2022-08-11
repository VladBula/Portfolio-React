import React from 'react';
import s from "./Main.module.css";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';



const Main = () => {
    return (
        <div className={s.mainBlock} id="main">
            <div className={s.container}>
                <Fade direction='down' duration={3500} triggerOnce>
                <div className={s.mainGreeting}>
                    <span>Hi there</span>
                    <h1>I am Vladislav Bulynko</h1>
                    <ReactTypingEffect
                        text={["FRONT-END DEVELOPER"]}
                    />
                </div>
                    <Tilt>
                        <div>
                            <div className={s.mainPhoto}>
                                <div className={s.image}></div>
                            </div>
                        </div>
                    </Tilt>

                </Fade>
            </div>

        </div>
    );
};

export default Main;
