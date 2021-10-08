import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router';

const Maker = ({authService}) => {
    const [cards, setCard] = useState([
        {
            id: '1',
            name: 'younah',
            company: 'ibiz',
            theme: 'light', 
            title: 'Software Engineer',
            email: 'ynshin@ibizsoftware.co.kr',
            message: 'go for it',
            fileName: 'ynshin',
            fileURL: ''
        },
        {
            id: '2',
            name: 'younah2',
            company: 'ibiz2',
            theme: 'light', 
            title: 'Software Engineer2',
            email: 'ynshin2@ibizsoftware.co.kr',
            message: 'go for it2',
            fileName: 'ynshin2',
            fileURL: ''
        },
        {
            id: '3',
            name: 'younah3',
            company: 'ibiz3',
            theme: 'dark', 
            title: 'Software Engineer3',
            email: 'ynshin@ibizsoftware.co.kr3',
            message: 'go for it3',
            fileName: 'ynshin3',
            fileURL: ''
        }
    ]);
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=> {
        authService.onAuthChange(user => {
          if (!user) {
              history.push('/');
          }
        })
    });

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};


export default Maker;