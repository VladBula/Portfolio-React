import React, {FormEvent, useState} from 'react';
import s from "./Contact.module.css";
import axios from "axios";

const Contact = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')


    const changeNameHandler = (e: FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const changeEmailHandler = (e: FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const changeMessageHandler = (e: FormEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const sendMessage = async () => {
            try {
                await axios.post('https://https://smtp-node-serv.herokuapp.com//sendMessage', {name, email, message})
            } catch (e) {
                alert('Some error')
            }
        }

    return (
        <div className={s.contactBlock} id="contacts">
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>Contacts</h2>
                    <div className={s.line}></div>
                </div>
                <form className={s.form}>
                    <input type="text" placeholder="Name" onClick={changeNameHandler}/>
                    <input type="email" placeholder="E-mail" onClick={changeEmailHandler}/>
                    <textarea placeholder="Your message" onClick={changeMessageHandler}></textarea>
                </form>
                <div className={s.contactButton}>
                    <button type='submit' onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;