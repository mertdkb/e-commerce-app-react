import React from 'react'
import {Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert} from '@chakra-ui/react'
import {useFormik} from 'formik'
import { fetchLogin } from '../../../api';
import {useAuth} from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import validationSchema from './validations';

function Signin() {
  const {login} = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async(values, bag) => {
      try {
        const loginResponse = await fetchLogin({
          email: values.email,
          password: values.password
        });

        login(loginResponse)
        navigate('/home');
      } catch (error) {
        bag.setErrors({general : error.response.data.message})
      }
    }
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10">
          <Box textAlign="center">
            <Heading>
              Sign In
            </Heading>
          </Box>
          <Box mt="5px">
            {
              formik.errors.general && (
                <Alert status='error'>
                  {formik.errors.general}
                </Alert>
              )
            }
          </Box>
          <Box m="5px" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl mt="15px">
                <FormLabel>E-Mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt="5px">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <Button mt="5px" width="full" type='submit'>
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin