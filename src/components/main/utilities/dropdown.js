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
                <div style={{ padding: '7px' }}>
                    <Link to="/Agenda" style={{ color: 'black', textDecoration: 'inherit' }}>
                        <div className={styles.menuItem} onClick={handleClose}>
                            Editar Perfil
                    </div>
                    </Link>
                    <Link to="/Checkin" style={{ color: 'black', textDecoration: 'inherit' }}>
                        <div className={styles.menuItem} onClick={handleClose}>
                            Logout
                    </div>
                    </Link>
                </div>
            </Menu>
        </div>
    )
}

export default ComponentDropdown;