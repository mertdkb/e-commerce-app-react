import React from 'react'

import { useQuery } from 'react-query'
import { fetchOrders } from '../../../api'
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, Text, } from '@chakra-ui/react'

function Orders() {
    const { isLoading, isError, error, data } = useQuery('admin:orders', fetchOrders);

    if (isLoading) {
        return <div>
            loading
        </div>
    }

    if (isError) {
        return <div>
            error {error.message}
        </div>
    }

    return (
        <div>
            <Text fontSize="2xl" p="5">Orders</Text>

            <Table variant="simple">
                <TableCaption>Order list</TableCaption>
                <Thead>
                    <Tr>
                        <Th>User</Th>
                        <Th>Address</Th>
                        <Th isNumeric>Items</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.user.email}</Td>
                                <Td>{item.adress}</Td>
                                <Td isNumeric>{item.items.length}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default Orders