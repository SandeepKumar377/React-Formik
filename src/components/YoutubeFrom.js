import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values) => {
    console.log('Form Values : ', values)
}

const validate = (values) => {
    // values.name, values.email, values.channel
    // errors.name, errors.email, errors.channel
    // errors.anme='This field is required'
    let errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    if (!values.channel) {
        errors.channel = 'Required'
    }

    return errors
}

const YoutubeFrom = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log('Form errors : ', formik.errors)

    return (
        <div>
            <h1>Youtube From</h1>
            <form onSubmit={formik.handleSubmit} >
                <div className='form-control'>
                <label htmlFor='name' >Name</label>
                <input type='text'
                    name='name'
                    id='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='email' >Email</label>
                <input type='email'
                    name='email'
                    id='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='channel' >Channel</label>
                <input type='text'
                    name='channel'
                    id='channel'
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                />
                {formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeFrom
