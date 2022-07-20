import React from 'react';
import s from "./Main.module.css";
import Particles from "react-tsparticles";
import {ISourceOptions} from 'tsparticles-engine';

const particlesOptions: ISourceOptions = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#ffffff" },
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
            value: { min: 1, max: 5 }
        }
    }
}



        const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Particles className={s.particles} options={particlesOptions}/>
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