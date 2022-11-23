import { Box, Image, Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

function Card() {
  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="3">
        <Link to="#/">
          <Image src="https://picsum.photos/id/237/200/300" alt='product' />

          <Box p="6">
            <Box display="plex" alignItems="baseline">
              12/12/1212
            </Box>

            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
              Macbook Pro
            </Box>

            <Box>
              100tl
            </Box>
          </Box>
        </Link>

        <Button colorScheme="blue">
          Add to basket
        </Button>
      </Box>
    </div>
  )
}

export default Card