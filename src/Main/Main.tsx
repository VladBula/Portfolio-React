import React from 'react';
import s from "./Main.module.css";
import Particles from "react-tsparticles";
import {ISourceOptions} from 'tsparticles-engine';

const particlesOptions: ISourceOptions = {
    background: {
        color: {
            value: "#0d47a1",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
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