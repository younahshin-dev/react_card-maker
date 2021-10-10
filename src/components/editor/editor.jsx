import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, editCard, deleteCard}) => 
    <section className={styles.editor}>
       <h1 className={styles.title}>Card Maker</h1>
       {
           Object.keys(cards).map(key=> (
            <CardEditForm key={key} card={cards[key]} editCard={editCard} deleteCard={deleteCard}></CardEditForm>
           ))
       }
       <CardAddForm onAdd={addCard}/>
    </section>
; 

export default Editor;