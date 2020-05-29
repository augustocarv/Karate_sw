import React from 'react'
import styles from './main.module.css'
import Dropdown from './utilities/dropdown'

const ComponentMain = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.user}>
                <div className={styles.nameUser}>
                    Luiz Augusto Barros de Carvalho
               </div>
                <Dropdown />
            </div>
            <div className={styles.title}>
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
export default ComponentMain