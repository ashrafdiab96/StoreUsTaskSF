import { CircularProgress } from '@mui/material';
import React from 'react';
import styles from './FormLoading.module.scss';

const FormLoading = () => {
    return (
        <div className={styles.loading}>
            <CircularProgress />
        </div>
    );
}

export default FormLoading;
