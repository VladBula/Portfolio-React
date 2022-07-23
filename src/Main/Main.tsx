import React from 'react';
import s from "./Main.module.css";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';



const Main = () => {
    //@ts-ignore
    const particlesInit = async (main) => {

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };


    return (
        <div className={s.mainBlock} id="main">
            <Particles
                className={s.tsparticles}
                init={particlesInit}
                options={{
                    fullScreen: false,
                    background: {
                        color: {
                            value: "#272728"
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            push: {
                                quantity: 1
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        links: {
                            color: "#da6262",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: {min: 1, max: 5}
                        }
                    },
                    detectRetina: true
                }}
            />
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
