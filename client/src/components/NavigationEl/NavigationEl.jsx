import React from 'react';


import styles from './NavigationEl.module.scss'


export const NavigationEl = ({id, setQuestionNumber, questionNumber}) => {
    return (
        <div onClick={() => setQuestionNumber(id)} className={ id === questionNumber ? `${styles.normal} ${styles.active}`
            : id < questionNumber
                ? `${styles.normal} ${styles.passed}`
                : styles.normal}>
            {id}
        </div>
    );
};

