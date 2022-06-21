import React from 'react';
import s from "./SkillBox.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {Icon} from "../Icon";

type PropsType = {
    id:string
    title:string
    text:string
    iconName:string | null
    iconSize:number
}

const SkillBox = (props:PropsType) => {



    return (
        // <FontAwesomeIcon spin={props.spin} size={"5x"} icon={props.icon} color={'#dd1419'}/>
            <div className={s.skillBox}>
                <div className={s.skillIcon}>
                    <Icon icon={props.iconName} size={props.iconSize} color='#980033'/>
                </div>
                <h3 className={s.skillTitle}>{props.title}</h3>
                <span className={s.skillText}>{props.text}</span>
            </div>


    );
};

export default SkillBox;