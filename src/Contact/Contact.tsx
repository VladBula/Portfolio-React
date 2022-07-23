import React from 'react';
import s from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={s.contactBlock} id="contacts">
            <div className={s.container}>
                <div className={s.header}>
                    <h2 className={s.title}>Contacts</h2>
                    <div className={s.line}></div>
                </div>
                <form className={s.form} action="">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <textarea placeholder="Your message"></textarea>
                </form>
                <div className={s.contactButton}>
                    <a href="#">Send</a>
                </div>


            </div>

        </div>
    );
};

export default Contact;