import { Box, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useBasket } from '../../contexts/BasketContext'

function Card({ item }) {
  const { addToBasket, items } = useBasket();

  const findBasketItem = items.find((e) => e._id === item._id);

  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="3">
        <Link to={`/product/${item._id}`}>
          <Image src={item.photos} alt='product' />

          <Box p="6">
            <Box display="plex" alignItems="baseline">
              {moment(item.createdAt).format('DD/MM/YYYY')}
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              {item.title}
            </Box>

            <Box>
              {item.price}
            </Box>
          </Box>
        </Link>

        <Button colorScheme={findBasketItem ? "gray" : "blue"} onClick={() => addToBasket(item, findBasketItem)}>
          {
            findBasketItem ? 'Remove from basket' : 'Add to basket'
          }
        </Button>
      </Box>
    </div>
  )
}

export default Card