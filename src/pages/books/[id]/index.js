import React, { useEffect } from 'react';
import styles from './book.module.scss';
import { useRouter } from 'next/router';
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getBookThunk } from '@/redux/thunks/booksThunk';
import moment from 'moment';
import Head from 'next/head';

const Book = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    const { book } = useSelector(state => state.books);

    useEffect(() => {
        dispatch(getBookThunk(id));
    }, []);

    return (
        <DefaultLayout>
            <Head>
                <title>Book | {book?.name}</title>
            </Head>
            <div className={styles.book}>
                <h2>{book?.name}</h2>
                <p>{book?.description}</p>
                <div className={styles.bookTimeAndAuthor}>
                    <div className={styles.time}>{moment(book?.created_at).format('MM/DD/YYYY - HH:ss A')}</div>
                    <div className={styles.author}>{book?.write?.name}</div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Book;
