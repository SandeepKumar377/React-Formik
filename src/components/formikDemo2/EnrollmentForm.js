import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const EnrollmentForm = () => {
    const dropdownOptions = [
        { key: 'Select your cource', value: '' },
        { key: 'ReactJS', value: 'react' },
        { key: 'AngularJS', value: 'angular' },
        { key: 'VueJS', value: 'vue' },
        { key: 'NextJS', value: 'next' },
        { key: 'JavaScript', value: 'javascript' },
    ]
    const checkboxOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'BootStrap', value: 'bootstrap' },
        { key: 'LESS', value: 'less' },
        { key: 'SASS', value: 'sass' },
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skill: [],
        courseDate: null,
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email is required'),
        bio: Yup.string().required('Required'),
        course: Yup.string().required('Course Required'),
        courseDate: Yup.date().required('Required').nullable(),
    })
    const onSubmit = (values) => {
        console.log('Form Data', values)
    }
    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {formik => {
            return <Form>
                <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                />
                <FormikControl
                    control='textarea'
                    label='Bio'
                    name='bio'
                />
                <FormikControl
                    control='select'
                    label='Select Course'
                    name='course'
                    options={dropdownOptions}
                />
                <FormikControl
                    control='checkbox'
                    label='Your skills'
                    name='skill'
                    options={checkboxOptions}
                />
                <FormikControl
                    control='date'
                    label='Course Date'
                    name='courseDate'
                />
                <button type='submit' disabled={!formik.isValid} >Submit</button>
            </Form>
        }}
    </Formik>
}

export default EnrollmentForm
