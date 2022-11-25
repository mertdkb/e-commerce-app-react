import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react'

function index() {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/home">eCommerce</Link>
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <Link to="/signin">
                    <Button colorScheme='blue'>Login</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme='gray'>Register</Button>
                </Link>

            </div>
        </nav>
    )
}

export default index