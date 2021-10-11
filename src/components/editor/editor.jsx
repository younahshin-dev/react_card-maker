import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, editCard, deleteCard}) => 
    <section className={styles.editor}>
       <h1 className={styles.title}>Card Maker</h1>
       {
           Object.keys(cards).map(key=> (
            <CardEditForm key={key} card={cards[key]} editCard={editCard} deleteCard={deleteCard} FileInput={FileInput}></CardEditForm>
           ))
       }
       <CardAddForm onAdd={addCard} FileInput={FileInput}/>
    </section>
; 

export default Editor;