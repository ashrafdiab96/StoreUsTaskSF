import React from 'react';
import styles from './admin-panel.module.scss';
import AdminLayout from '@/layouts/AdminLayout/AdminLayout';
import Head from 'next/head';

const Admin = () => {
    return (
        <AdminLayout>
            <Head>
                <title>Admin | Home</title>
            </Head>
            <div className={styles.admin}>
                <div className={styles.intro}>
                    Admin Control Panel
                </div>
            </div>
        </AdminLayout>
    );
}

export default Admin;
