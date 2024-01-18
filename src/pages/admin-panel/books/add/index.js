import React, { useEffect, useState } from 'react';
import styles from './add.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';
import { createBookThunk, writersThunk } from '@/redux/thunks/booksThunk';
import Head from 'next/head';

const AddBook = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [name, setName] = useState('');
    const [writer, setWriter] = useState('');
    const [desc, setDesc] = useState('');

    const { loading, writers } = useSelector(state => state.books);

    useEffect(() => {
        dispatch(writersThunk());
    }, []);

    const save = async () => {
        await dispatch(createBookThunk({
            "name": name,
            "writer_id": writer,
            "description": desc,
        }));
        router.replace('/admin-panel/books');
    }

    return (
        <AdminLayout>
            <div className={styles.main}>
                <Head>
                    <title>Admin | Books | Create</title>
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

export default AddBook;
