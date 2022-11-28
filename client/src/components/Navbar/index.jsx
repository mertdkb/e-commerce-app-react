import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { useBasket } from '../../contexts/BasketContext'

function Navbar() {

    const { loggedIn, logout, user } = useAuth();
    const { items } = useBasket();

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

                    {
                        loggedIn && (
                            user?.role === 'admin' && (
                                <>
                                    <li>
                                        <Link to="/admin/home">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="/admin/orders">Orders</Link>
                                    </li>

                                    <li>
                                        <Link to="/admin/products">Manage products</Link>
                                    </li>

                                </>
                            )
                        )
                    }
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
                            {
                                user?.role === 'user' && (
                                    <Link to="/basket">
                                        <Button colorScheme='orange' >Basket ({items.length})</Button>
                                    </Link>
                                )
                            }
                            {
                                user?.role === 'admin' && (
                                    <Link to="/admin">
                                        <Button colorScheme='gray' variant="outline" >Admin</Button>
                                    </Link>
                                )
                            }
                            <Link to="/profile">
                                <Button mr="1" colorScheme='blue'>Profile</Button>
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