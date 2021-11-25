import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const FormikContainer = () => {

    const dropdownOptins = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' },
    ]
    const radioOptions = [
        { key: 'Radio 1', value: 'radioOption1' },
        { key: 'Radio 2', value: 'radioOption2' },
        { key: 'Radio 3', value: 'radioOption3' }
    ]
    const checkboxOptions = [
        { key: 'CheckKey 1', value: 'checkValue1' },
        { key: 'CheckKey 2', value: 'checkValue2' },
        { key: 'CheckKey 3', value: 'checkValue3' }
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: []
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is Required'),
        description: Yup.string().required('Description is Required'),
        selectOption: Yup.string().required('Option is Required'),
        radioOption: Yup.string().required('Radio Option is Required'),
        checkboxOption: Yup.array().required('Checkbox Required'),
    })
    const onSubmit = values => console.log('Form data', values)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                    />
                    <FormikControl
                        control='textarea'
                        label='Description'
                        name='description'
                    />
                    <FormikControl
                        control='select'
                        label='Select a topic'
                        name='selectOption'
                        options={dropdownOptins}
                    />
                    <FormikControl
                        control='radio'
                        label='Choose Radio topic'
                        name='radioOption'
                        options={radioOptions}
                    />
                    <FormikControl
                        control='checkbox'
                        label='Select checkbox topic'
                        name='checkboxOption'
                        options={checkboxOptions}
                    />
                    <button type='reset'>Reset</button>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer
