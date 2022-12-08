import React from 'react'

import { Text, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { FieldArray, Formik } from 'formik'
import validationSchema from './validations';
import { message } from 'antd'
import { postProduct } from '../../../api';
import { useMutation, useQueryClient } from 'react-query'

function NewProduct() {
    const queryClient = useQueryClient();

    const newProductMutation = useMutation(postProduct, {
        onSuccess: () => queryClient.invalidateQueries("admin:products")
    });

    const handleSubmit = async (values, bag) => {
        message.loading({ content: 'Loading...', key: "product_add" });

        const newValues = {
            ...values,
            photos: JSON.stringify(values.photos)
        }

        try {
            newProductMutation.mutate(newValues)
            message.success({
                content: "The product successfully added",
                key: "product_add",
                duration: 2,
            })
        } catch (error) {
            message.error("The product does not added")
        }
    };

    return (
        <div>
            <Text fontSize="2xl">New Product</Text>

            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    price: "",
                    photos: [],
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                {
                    ({
                        handleSubmit,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        values,
                        isSubmitting
                    }) => <>
                            <Box>
                                <Box my="5" textAlign="left">
                                    <form onSubmit={handleSubmit}>
                                        <FormControl mt="4">
                                            <FormLabel>Title</FormLabel>
                                            <Input
                                                name='title'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                                disabled={isSubmitting}
                                                isInvalid={touched.title && errors.title}
                                            >
                                            </Input>
                                            {touched.title && errors.title && <Text color={"red"}>{errors.title}</Text>}
                                        </FormControl>

                                        <FormControl mt="4">
                                            <FormLabel>Description</FormLabel>
                                            <Textarea
                                                name='description'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                                disabled={isSubmitting}
                                                isInvalid={touched.description && errors.description}
                                            >
                                            </Textarea>
                                            {touched.description && errors.description && <Text color={"red"}>{errors.description}</Text>}
                                        </FormControl>

                                        <FormControl mt="4">
                                            <FormLabel>Price</FormLabel>
                                            <Input
                                                name='price'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.price}
                                                disabled={isSubmitting}
                                                isInvalid={touched.price && errors.price}
                                            >
                                            </Input>
                                            {touched.price && errors.price && <Text color={"red"}>{errors.price}</Text>}
                                        </FormControl>

                                        <FormControl mt="4">
                                            <FormLabel>Photos</FormLabel>
                                            <FieldArray
                                                name="photos"
                                                render={(arrayHelpers) => (
                                                    <div>
                                                        {values.photos &&
                                                            values.photos.map((photo, index) => (
                                                                <div key={index}>
                                                                    <Input
                                                                        name={`photos.${index}`}
                                                                        value={photo}
                                                                        disabled={isSubmitting}
                                                                        onChange={handleChange}
                                                                        width="3xl"
                                                                    />
                                                                    <Button
                                                                        ml="4"
                                                                        type="button"
                                                                        colorScheme="red"
                                                                        onClick={() => arrayHelpers.remove(index)}
                                                                    >
                                                                        Remove
                                                                    </Button>
                                                                </div>
                                                            ))
                                                        }


                                                        <Button
                                                            mt={5}
                                                            onClick={() => arrayHelpers.push("")}
                                                        >
                                                            Add a Photo
                                                        </Button>
                                                    </div>
                                                )}
                                            />
                                        </FormControl>
                                        <Button
                                            mt="4"
                                            width="full"
                                            type="submit"
                                            isLoading={isSubmitting}
                                        >
                                            Save
                                        </Button>
                                    </form>
                                </Box>

                            </Box>
                        </>


                }

            </Formik>
        </div>
    )
}

export default NewProduct