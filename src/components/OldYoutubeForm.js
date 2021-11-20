import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = (values) => {
    console.log('Form Values : ', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email!').required('Required!'),
    channel: Yup.string().required('Required!'),

})

const OldYoutubeFrom = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log('Visited Field : ', formik.touched)

    return (
        <div>
            <h1> Old Youtube From</h1>
            <form onSubmit={formik.handleSubmit} >
                <div className='form-control'>
                    <label htmlFor='name' >Name</label>
                    <input type='text'
                        name='name'
                        id='name'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='email' >Email</label>
                    <input type='email'
                        name='email'
                        id='email'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel' >Channel</label>
                    <input type='text'
                        name='channel'
                        id='channel'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OldYoutubeFrom

