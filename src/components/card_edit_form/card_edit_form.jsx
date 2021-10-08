
import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    const {
        id,
        name,
        company,
        theme, 
        title,
        email,
        message
    } = card;

    const onSubmit = () => {

    };
    return(
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name}/>
            <input className={styles.input} type="text" name="company" value={company}/>
            <input className={styles.input} type="text" name="title" value={title}/>
            <input className={styles.input} type="text" name="email" value={email}/>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.textarea} type="textarea" name="message" value={message}/>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit}/>
        </form>
    )
};

export default CardEditForm;