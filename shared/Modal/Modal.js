import React from 'react'
import styles from './Modal.module.css'

const Modal = () => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
export default Modal;