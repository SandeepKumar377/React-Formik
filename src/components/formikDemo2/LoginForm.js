import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email reqired'),
        password: Yup.string().required('Email reqired'),
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
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='input'
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

export default LoginForm
