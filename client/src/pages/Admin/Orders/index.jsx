import React from 'react'

import { useQuery } from 'react-query'
import { fetchOrders } from '../../../api'
import {Table, Thead, Tbody, Tr, Th, Td, TableCaption, Text,}from '@chakra-ui/react'

function Orders() {
    const { isLoading, isError, error, data } = useQuery('admin:orders', fetchOrders);

    if(isLoading) {
        return <div>
            loading
        </div>
    }

    if(isError) {
        return <div>
            error {error.message}
        </div>
    }

    return (
        <div>
            <Text fontSize="2xl" p="5">Orders</Text>

            <Table>
                
            </Table>
        </div>
    )
}

export default Orders