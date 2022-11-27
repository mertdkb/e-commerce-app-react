import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'

function Navbar() {

    const { loggedIn, logout } = useAuth();
    console.log(loggedIn)

    const handleLogout = async () => {
        logout();
    }

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
                {
                    !loggedIn && (
                        <>
                            <Link to="/signin">
                                <Button colorScheme='blue'>Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button colorScheme='gray'>Register</Button>
                            </Link>
                        </>
                    )
                }

                {
                    loggedIn && (
                        <>
                            <Link to="/profile">
                                <Button colorScheme='blue'>Profile</Button>
                            </Link>
                            <Link to="/products">
                                <Button colorScheme='gray' onClick={handleLogout}>Logout</Button>
                            </Link>
                        </>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar