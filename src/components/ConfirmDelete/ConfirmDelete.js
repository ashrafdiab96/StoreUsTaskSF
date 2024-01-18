import React, { useEffect } from 'react';
import styles from './ConfirmDelete.module.scss';
import { Box, CircularProgress, Modal, Typography } from '@mui/material';

const ConfirmDelete = ({ open, handleClose, handleDelete, loading }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={styles.modal}
        >
            <Box className={styles.box}>
                <Typography
                    id="modal-modal-title"
                    variant="h6" component="h2"
                    className={styles.typography}
                >
                    <div className={styles.text}>Are you sure you want to delete this item?</div>
                    <div className={styles.buttons}>
                        <button className={styles.yes} onClick={handleDelete}>
                            {loading ? (<CircularProgress style={{ width: '25px', height: '25px' }} />) : 'Yes'}
                        </button>
                        <button className={styles.no} onClick={handleClose}>No</button>
                    </div>
                </Typography>
            </Box>
        </Modal>
    )
}

export default ConfirmDelete;
