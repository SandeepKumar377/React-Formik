import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const RegistrationForm = () => {
    const options = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonemoc' }
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email reqired'),
        password: Yup.string().required('Password reqired'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Password reqired'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Telephoen Number Required')
        })
    })

    const onSubmit = (values) => {
        console.log('Form data', values)
    }
    return <Formik
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
                    <FormikControl
                        control='input'
                        type='password'
                        label='Confirm Password'
                        name='confirmPassword'
                    />
                    <FormikControl
                        control='radio'
                        label='Mode of Contact'
                        name='modeOfContact'
                        options={options}
                    />
                    <FormikControl
                        control='input'
                        type='text'
                        label='Phone Number'
                        name='phone'
                    />
                    <button type='submit' disabled={!formik.isValid} >Submit</button>
                </Form>
            }
        }

    </Formik>

}

export default RegistrationForm
