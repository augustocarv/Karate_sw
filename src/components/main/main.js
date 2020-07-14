import React from 'react'
import styles from './main.module.css'
import Dropdown from './utils/dropdown'
import { GiHamburgerMenu } from 'react-icons/gi'

const ComponentMain = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.topbar}>
                <div className={styles.user}>
                    <div style={{margin: '0 5px 5px 15px'}}>
                        <GiHamburgerMenu onClick={() => props.setHidden(!props.hidden)} style={{ cursor: 'pointer', fontSize: '21px', color: 'grey' }} />
                    </div>
                    <div className={styles.menuUser}>
                        <div className={styles.nameUser}>
                            Luiz Augusto Barros de Carvalho
                    </div>
                        <Dropdown />
                    </div>
                </div>
                <div className={styles.title}>
                    {props.title}
                </div>
            </div>
            <div className={styles.main_content}>
                {props.children}
            </div>
        </div>
    )
}
export default ComponentMain