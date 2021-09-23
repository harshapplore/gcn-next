import React from 'react'; 
import styles from './styles.module.css'
import Loader from "react-loader-spinner";

const AppLoader = (props) => {
    return (
        <div className={styles.container}>
            <Loader
                type="BallTriangle"
                color="#808800"
                height={40}
                width={40}
            />
        </div>
    )
}


export default AppLoader;