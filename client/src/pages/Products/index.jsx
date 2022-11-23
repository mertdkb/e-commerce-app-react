import React from 'react'
import { Grid } from '@chakra-ui/react'
import Card from '../../components/Card'
import { useQuery } from 'react-query'
import { fetchProductList } from '../../api'

function Products() {
  const { isLoading, error, data } = useQuery('products', fetchProductList)
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + <error className="message"></error>
   
  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)" gap={5}>
        {data.map((item, key) => <Card key={key} item={item}/>)}
      </Grid>
    </div>
  )
}

export default Products