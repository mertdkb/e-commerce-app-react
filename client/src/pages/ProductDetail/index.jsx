import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../api';
import { Box, Text, Button } from '@chakra-ui/react'
import moment from 'moment'
import ImageGallery from 'react-image-gallery'
import { useBasket } from '../../contexts/BasketContext'

function ProductDetail() {
    const { product_id } = useParams();
    const { isLoading, isError, data } = useQuery(['product', product_id], () => fetchProduct(product_id))
    const { addToBasket, items } = useBasket();

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                Error!
            </div>
        );
    }

    const findBasketItem = items.find((item) => item._id === product_id);
    const images = data.photos.map((url) => ({ original: url }));

    return (
        <div>
            <Text as="h2" fontSize="2xl">
                {data.title}
            </Text>
            <Text>
                {moment(data.createdAt).format("DD/MM/YYYY")}
            </Text>
            <p>
                {data.description}
            </p>

            <Box margin="10">
                <ImageGallery items={images} />
            </Box>

            <Button
                colorScheme={findBasketItem ? "gray" : "blue"}
                onClick={() => addToBasket(data, findBasketItem)}>
                {
                    findBasketItem ? 'Remove from basket' : 'Add to basket'
                }
            </Button>
        </div>
    )
}

export default ProductDetail