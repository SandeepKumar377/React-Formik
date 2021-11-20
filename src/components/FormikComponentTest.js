import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values) => {
    console.log('Form Values : ', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required!'),
    email: Yup.string().email('Invalid email!').required('Email is Required!'),
    channel: Yup.string().required('Channel name is Required!'),
})

const FormikComponentTest = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <h1>Formik Component Youtube From</h1>
                <div className='form-control'>
                    <label htmlFor='name' >Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' />
                </div>

                <div className='form-control'>
                    <label htmlFor='email' >E-mail</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name='email' />
                </div>

                <div className='form-control'>
                    <label htmlFor='channel' >Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name='channel' />
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default FormikComponentTest
