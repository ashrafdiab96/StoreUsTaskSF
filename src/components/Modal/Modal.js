import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ msg, handleClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.msgBox}>
                <p>{msg}</p>
                <button
                    className={styles.btn}
                    onClick={handleClose}
                >OK</button>
            </div>
        </div>
    );
}

export default Modal;
