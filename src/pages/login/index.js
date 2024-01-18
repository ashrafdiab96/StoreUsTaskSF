import React, { useState, useEffect } from 'react';
import styles from './login.module.scss';
import Head from 'next/head';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginThunk } from '@/redux/thunks/authThunks';

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { access_token, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (access_token) {
            router.replace('/admin-panel');
        }
    }, [access_token]);

    const login = async () => {
        await dispatch(loginThunk({ email, password }));
    };

    return (
        <div className={styles.main}>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.form}>
                <div className={styles.title}>Lgin</div>
                <input
                    className={styles.inp}
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className={styles.inp}
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button
                    className={styles.btn}
                    onClick={login}
                >
                    {loading ? (<CircularProgress />) : 'Login'}
                </button>
            </div>
        </div>
    );
}

export default Login;