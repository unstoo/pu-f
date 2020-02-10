import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import Form from '../components/Form'
import { NextPage } from 'next'
// import { useFormik } from 'formik';


const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>
        <Form />
        {/* <SignupForm /> */}
      </div>
    </Layout>
  )
}


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
// const validate = (values: { firstName: string | any[]; lastName: string | any[]; email: string; }) => {
//   const errors: any = {}

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//     <label htmlFor="firstName">First Name</label>
//     <input name="firstName" {...formik.getFieldProps('firstName')} />
//     {formik.touched.firstName && formik.errors.firstName ? (
//       <div>{formik.errors.firstName}</div>
//     ) : null}
//     <label htmlFor="lastName">Last Name</label>
//     <input name="lastName" {...formik.getFieldProps('lastName')} />
//     {formik.touched.lastName && formik.errors.lastName ? (
//       <div>{formik.errors.lastName}</div>
//     ) : null}
//     <label htmlFor="email">Email Address</label>
//     <input name="email" {...formik.getFieldProps('email')} />
//     {formik.touched.email && formik.errors.email ? (
//       <div>{formik.errors.email}</div>
//     ) : null}
//     <button type="submit">Submit</button>
//   </form>
//   );
// };

export default IndexPage
