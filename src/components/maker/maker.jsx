import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import { useHistory } from 'react-router';

const Maker = ({ FileInput, authService, cardRepository }) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    };

    // 사용자의 아이디가 변경될때 마다
    useEffect(()=> {
        if(!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });
        //useEffect 에서 리턴을 하면 react가 컴포넌트가 언마운트 되었을때 자동으로 리턴한 함수를 호출
         return () => stopSync();

    }, [userId]);

    // 로그인 관련  useEffect
    useEffect(()=> {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        })
    });

    const createOrUpdateCard = card => {
        setCards(cards => {
            const updated = { ...cards };
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {
        console.log(1);
        setCards(cards => {
            const updated = { ...cards };
            console.log(card.id);
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={createOrUpdateCard} editCard={createOrUpdateCard} deleteCard={deleteCard} FileInput={FileInput} />
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};


export default Maker;