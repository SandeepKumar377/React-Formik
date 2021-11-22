import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: ['']
}

const savedValues = {
    name: 'Sandeep',
    email: 's@mail.com',
    channel: 'TechCode',
    comments: 'Welcome to Formik',
    address: 'Delhi',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values, onSubmitProps) => {
    console.log('Form Values : ', values)
    console.log('onSubmit Props : ', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required!'),
    email: Yup.string().email('Invalid email!').required('Email is Required!'),
    channel: Yup.string().required('Channel name is Required!'),
    address: Yup.string().required('Required!'),
})

const validateComments = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}

const FormikComponentTest = () => {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        >
            {
                formik => {
                    console.log('Formik props:', formik)
                    return (
                        <Form>
                            <h1>Formik Component Youtube From</h1>
                            <div className='form-control'>
                                <label htmlFor='name' >Name</label>
                                <Field type='text' id='name' name='name' />
                                <ErrorMessage component={TextError} name='name' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='email' >E-mail</label>
                                <Field type='email' id='email' name='email' />
                                <ErrorMessage name='email'>
                                    {errorMsg => <div className="error">{errorMsg}</div>}
                                </ErrorMessage>
                            </div>

                            <div className='form-control'>
                                <label htmlFor='channel' >Channel</label>
                                <Field type='text' id='channel' name='channel' />
                                <ErrorMessage name='channel' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='comments' >Comments</label>
                                <Field as='textarea' type='text' id='comments' name='comments' validate={validateComments} />
                                <ErrorMessage name='comments' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='address' >Address</label>
                                <FastField id='address' name='address'>
                                    {
                                        (props) => {
                                            const { field, form, meta } = props
                                            console.log('Address Render', form.errors)
                                            return (
                                                <div>
                                                    <input type='text' id='address' {...field} />
                                                    {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                                                </div>
                                            )
                                        }
                                    }
                                </FastField>
                                {/* <ErrorMessage name='address' component={TextError} /> */}
                            </div>

                            <div className='form-control'>
                                <label htmlFor='facebook' >Facebook Profile</label>
                                <Field type='text' id='facebook' name='social.facebook' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='twitter' >Twitter Profile</label>
                                <Field type='text' id='twitter' name='social.twitter' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='phoneNumber' >Primary Phone Number</label>
                                <Field type='text' id='priPhoneNumber' name='phoneNumber[0]' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='phoneNumber' >Secondary Phone Number</label>
                                <Field type='text' id='secPhoneNumber' name='phoneNumber[1]' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor='phoneNumber' >List of Phone Number</label>
                                <FieldArray name='phNumbers'>
                                    {
                                        (fieldArrayProps) => {
                                            const { push, remove, form } = fieldArrayProps
                                            const { values } = form
                                            const { phNumbers } = values
                                            console.log('Form errors : ', form.errors)
                                            return (
                                                <div>
                                                    {
                                                        phNumbers.map((phNumber, index) => (
                                                            <div key={index}>
                                                                <Field name={`phNumbers[${index}]`} />
                                                                {
                                                                    index > 0 &&
                                                                    <button type='button' onClick={() => remove(index)}> - </button>
                                                                }
                                                                <button type='button' onClick={() => push('')}> + </button>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>

                            {/* <button type='button' onClick={() => formik.validateField('comments')} >Validate comments</button>
                            <button type='button' onClick={() => formik.validateForm()} >Validate all</button>
                            <button type='button' onClick={() => formik.setFieldTouched('comments')} >Visit comments</button>
                            <button type='button' onClick={() => formik.setTouched(
                                {
                                    name: true,
                                    channel: true,
                                    email: true,
                                    comments: true,
                                    phNumbers: true
                                })} >Visit fields</button> */}

                            <button type='reset'>Reset</button>
                            <button type='button' onClick={() => setFormValues(savedValues)} >Load save data</button>
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikComponentTest
