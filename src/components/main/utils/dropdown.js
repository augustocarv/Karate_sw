import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'
import Menu from '@material-ui/core/Menu';
import styles from './dropdown.module.css'
import { Link } from 'react-router-dom'


const ComponentDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const Logout = () => {
        if (window.confirm('Deseja sair do sistema ?')) {
            sessionStorage.clear()
            window.location.href = "/Login"
        }
    }

    return (
        <div>
            <div onClick={handleClick}>
                <FaUserCircle className={styles.userImg} />
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: '1.5%' }}
            >
                <div style={{ outline: 'none', padding: '7px' }}>
                    <div onClick={handleClose, Logout} className={styles.menuItem}>
                        Logout
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default ComponentDropdown;