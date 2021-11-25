import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const ChakraLoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email reqired'),
        password: Yup.string().required('Password reqired'),
    })

    const onSubmit = (values) => {
        console.log('Form data', values)
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        return <Form>
                            <FormikControl
                                control='chakrainput'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='chakrainput'
                                type='password'
                                label='Password'
                                name='password'
                            />
                            <button type='submit' disabled={!formik.isValid} >Submit</button>
                        </Form>
                    }
                }

            </Formik>
        </div>
    )
}

export default ChakraLoginForm
