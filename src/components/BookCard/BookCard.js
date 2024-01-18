import React from 'react';
import styles from './BookCard.module.scss';

const BookCard = ({ book }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.name}>{book?.name}</div>
            </div>
        </div>
    );
}

export default BookCard;