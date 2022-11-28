import {useState, createContext, useEffect, useContext} from 'react'
import { fetchLogout, fetchMe } from '../api';
import {Flex, Spinner} from '@chakra-ui/react'

const AuthContext = createContext();

const AuthProvider = ({childeren}) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const me = await fetchMe();

                setLoggedIn(true);
                setUser(me);
                setLoading(false);

                console.log(me)
            } catch (e) {
                setLoading(false);
            }
        })()
    }, []);

    const login = (data) => {
        setLoggedIn(true);
        setUser(data)

        localStorage.setItem('access-token', data.accessToken);
        localStorage.setItem('refresh-token', data.refreshToken);
    };

    const logout = async () => {
        setLoggedIn(false);
        setUser(null);

        await fetchLogout();

        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
    }

    const values = {
        loggedIn,
        user,
        login,
        logout,
    };

    if(loading) {
        return (
            <Flex justifyContent="center" alignItems="center" height="100vh">
                <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' size="xl" color='blue'/>
            </Flex>
        )
    }

    return <AuthContext.Provider value={values} >{childeren}</AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};