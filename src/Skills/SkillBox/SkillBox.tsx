import React from 'react';
import s from "./SkillBox.module.css";
import {Icon} from "../Icon";
import {Fade} from "react-awesome-reveal";

type PropsType = {
    id:string
    title:string
    text:string
    iconName:string | null
    iconSize:number
}

const SkillBox = (props:PropsType) => {



    return (
        <Fade direction='up' duration={3500} cascade triggerOnce>
            <div className={s.skillBox}>
                <div className={s.skillIcon}>
                    <Icon icon={props.iconName} size={props.iconSize} color='#980033'/>
                </div>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.skillText}>{props.text}</span>
            </div>
        </Fade>
    );
};

export default SkillBox;