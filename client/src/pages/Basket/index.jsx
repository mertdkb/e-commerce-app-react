import { Alert, Button, Image, Box, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext'


function Basket() {
    const { items, removeFromBasket } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0);

    return (
        <Box p="5">
            {
                items.length < 1 && <Alert status='warning'>You dont have any items in your basket</Alert>
            }
            {
                items.length > 0 && <>
                    <ul>
                        {
                            items.map((item) => (
                                <li key={item._id} style={{marginBottom: 15}}>
                                    <Link to={`/product/${item._id}`}>
                                        <Image htmlWidth={200} src={item.photos[0]} alt="basket item" />
                                        {item.title} - {item.price} TL
                                    </Link>
                                    <br />
                                    <Button mt="5" mb="5" size="sm" colorScheme="blue" onClick={() => removeFromBasket(item._id)}>
                                        Remove from basket
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>

                    <Box mt="10">
                        <Text fontSize="22">Total : {total} TL</Text>
                    </Box>
                </>

            }

        </Box>
    )
}

export default Basket