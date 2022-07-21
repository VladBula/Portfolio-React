import React from 'react';
import s from "./Main.module.css";
import Particles from "react-tsparticles";
import {ISourceOptions} from 'tsparticles-engine';
import { loadFull } from "tsparticles";

const particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {enable: true, mode: "push"},
            onHover: {
                enable: true,
                mode: "repulse",
                parallax: {enable: false, force: 60, smooth: 10}
            },
            resize: true
        },
        modes: {
            push: {quantity: 4},
            repulse: {distance: 200, duration: 0.4}
        }
    },
    particles: {
        color: {value: "#980033"},
        move: {
            direction: "none",
            enable: true,
            outModes: "out",
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
            animation: {
                enable: true,
                speed: 0.05,
                sync: true,
                startValue: "max",
                count: 1,
                destroy: "min"
            },
            value: {
                min: 0,
                max: 0.5
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: {min: 1, max: 5}
        }
    }
}


const Main = () => {
    //@ts-ignore
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    //@ts-ignore
    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className={s.mainBlock}>
            <Particles
                className={s.tsparticles}
                init={particlesInit}
                loaded={particlesLoaded as any}
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
                                quantity: 4
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
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }}
            />
            <div className={s.container}>
                <div className={s.mainGreeting}>
                    <span>Hi there</span>
                    <h1>I am Vladislav Bulynko</h1>
                    <p>A FRONT-END DEVELOPER</p>
                </div>
                <div className={s.mainPhoto}>
                    <div className={s.image}></div>
                </div>
            </div>

        </div>
    );
};

export default Main;
