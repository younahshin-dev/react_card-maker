
import React, { useState } from "react";
import { useRef } from "react";

import Button from "../button/button";
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({fileName: null, fileURL: null});
    
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
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        console.log(card);
        formRef.current.reset();
        setFile({fileName: null, fileURL: null});
        onAdd(card);
    };

    const onFileChange = file => {
        setFile({fileName: file.name, fileURL: file.url});
        console.log(file);
    }

    return(
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name"/>
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company"/>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title"/>
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email"/>
            <select ref={themeRef} className={styles.select} name="theme" placeholder="theme">
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input ref={messageRef} className={styles.textarea} type="textarea" name="message" placeholder="message"/>
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange}/>
            </div>
            <Button name="Add" onClick={onSubmit}/>
        </form>
    )
};

export default CardAddForm;