import {useMemo} from 'react'
import { Link } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import { fetchProductList, deleteProduct } from '../../../api'

import { Table, Popconfirm } from 'antd'
import { Text } from '@chakra-ui/react'


function Products() {
  const { isLoading, isError, data, error } = useQuery('admin:products', fetchProductList);
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products")
  })
  const queryClient = useQueryClient();

  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <>
            <Link to={`${record._id}`}>Edit</Link>
  
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deleteMutation.mutate(record._id)
              }}
              okText="Yes"
              cancelText="No"
              placement='left'>
  
                <a href='/#' style={{marginLeft: 10}}>Delete</a>
            </Popconfirm>
          </>
        )
      },
  
    ]
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error {error.message}</div>
  }

  return (
    <div>
      <Text fontSize="2xl" p="5"></Text>

      <Table dataSource={data} columns={columns} rowKey="_id" />
    </div>
  )
}

export default Products