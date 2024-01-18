import React, { useState, useEffect } from 'react';
import styles from './edit.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CircularProgress } from '@mui/material';
import { getBookThunk, updateBookThunk, writersThunk } from '@/redux/thunks/booksThunk';

const EditBook = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router?.query;

    const [name, setName] = useState('');
    const [writer, setWriter] = useState('');
    const [desc, setDesc] = useState('');

    const { book, writers, loading } = useSelector(state => state.books);

    useEffect(() => {
        dispatch(getBookThunk(id));
        dispatch(writersThunk());
    }, []);

    useEffect(() => {
        setName(book?.name);
        setWriter(book?.write?.id);
        setDesc(book?.description);
    }, [book]);

    const save = async () => {
        await dispatch(updateBookThunk({
            "id": id,
            "payload": {
                "name": name,
                "writer_id": writer,
                "description": desc,
            }
        }));
        router.replace('/admin-panel/books');
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Book | Edit</title>
                </Head>
                <div className={styles.form}>
                    <p className={styles.title}>Add Product</p>
                    <div className={styles.inpDiv}>
                        <input
                            className={styles.inp}
                            type='text'
                            placeholder='Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            className={styles.inp}
                            type='text'
                            placeholder='Description'
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        />
                        <select
                            className={styles.sel}
                            value={writer}
                            onChange={e => setWriter(e.target.value)}
                        >
                            <option value='' selected disabled>Writer</option>
                            {writers?.length ? (
                                writers?.map((item, index) => {
                                    return (
                                        <option key={index} value={item?.id}>{item?.name}</option>
                                    );
                                })
                            ) : null}
                        </select>
                    </div>
                    <button
                        className={styles.btn}
                        onClick={save}
                    >
                        {loading ? (<CircularProgress />) : 'Submit'}</button>
                </div>
            </div>
        </AdminLayout>
    );
}

export default EditBook;
