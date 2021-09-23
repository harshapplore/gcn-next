import React from 'react'; 
import styles from './styles.module.css'

const EmptyComp = (props) => {
    return (
        <div className={styles.container}>
            {props.title}
        </div>
    )
}


export default EmptyComp;