
import React, { useRef } from "react";
import Button from "../button/button";
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, editCard, deleteCard }) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const themeRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();

    const {
        name,
        company,
        title,
        email,
        message,
        theme,
        fileName,
        fileURL,
    } = card;

    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();

        editCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });

    };

    const onFileChange = file => {
        console.log(file);
        editCard({
            ...card,
            fileName: file.name,
            fileURL: file.url
        })
    }

    const onDelete = (event) => {
        event.preventDefault();
        deleteCard(card);
    };

    return(
        <form ref={formRef} className={styles.form}>
            <input 
                ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
            <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
            <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
            <input ref={emailRef} className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
            <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input ref={messageRef} className={styles.textarea} type="textarea" name="message" value={message} onChange={onChange}/>
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button name="Delete" onClick={onDelete}/>
        </form>
    )
};

export default CardEditForm;