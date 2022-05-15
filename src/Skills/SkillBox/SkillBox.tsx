import React from 'react';
import s from "./SkillBox.module.css";


type PropsType = {
    id:string
    title:string
    text:string
}

const SkillBox = (props:PropsType) => {
    return (

            <div className={s.skillBox}>
                <div className={s.skillIcon}></div>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.skillText}>{props.text}</span>
            </div>


    );
};

export default SkillBox;