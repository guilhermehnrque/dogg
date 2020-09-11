import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../assets/dogs.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to="/" className={styles.logo} area-label="Dogs - Home">
                    <Dogs />
                </Link>
                <Link to="/login" className={styles.login}>Login | Criar</Link>
            </nav>
        </div>
    )
}

export default Header