import React from 'react'
import './_leaveAReply.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const LeaveAReply = () => {
    return (
        <>
         <div className="leaveAReply-container">
                <h3 className="leaveAReply-container-head">Leave a Reply</h3>
          
                <Formik
                        initialValues={{ message:'',name:'',email: '', website: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({ isSubmitting }) => (
                            <Form className="leaveAReply-container-form">
                                <div className="leaveAReply-container-form-message">
                                    <label>Your email address will not be published. Required fields are marked *</label>
                                    <Field  name="message"  as="textarea"/>
                                    {/* <ErrorMessage name="message" component="div" /> */}
                                </div>
                                <div className="leaveAReply-container-form-name">
                                    <label>Name*</label>
                                    <Field type="text" name="name" />
                                {/* <ErrorMessage name="name" component="div" /> */}
                                </div>
                                <div className="leaveAReply-container-form-email">
                                    <label>Email*</label>
                                    <Field type="email" name="email" />
                                {/* <ErrorMessage name="email" component="div" /> */}
                                </div>
                                <div className="leaveAReply-container-form-website">
                                    <label>Website</label>
                                    <Field type="text" name="website" />
                                {/* <ErrorMessage name="website" component="div" /> */}
                                </div>
                                <div className="leaveAReply-container-form-checkbox">
                                    <Field type="checkbox" name="check" />                   
                                    <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                </div>

                                <button type="submit" disabled={isSubmitting} className="leaveAReply-container-form-btn">Post comment</button>
                            </Form>
                        )}
                </Formik>
          
          </div>
        </>
    )
}

export default LeaveAReply
