
import React from "react";
import { useRef } from "react";

import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from './card_add_form.module.css';

const CardAddForm = ({onAdd}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const messageRef = useRef();

    const formRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();

        const card = {
            id: Date.now(), //uuid
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            theme: themeRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        };

        formRef.current.reset();
        onAdd(card);

    };

    return(
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name"/>
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company"/>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title"/>
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email"/>
            <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input ref={messageRef} className={styles.textarea} type="textarea" name="message" placeholder="message"/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Add" onClick={onSubmit}/>
        </form>
    )
};

export default CardAddForm;