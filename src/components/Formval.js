import React from 'react';
import { Formik, Form, Field } from 'formik';
function Formval() {
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
      function validateUsername(value) {
        let error;
        if (value === 'admin') {
          error = 'Nice try!';
        }
        return error;
      }
  return <div>
      <h1>Signup</h1>
     <Formik
       initialValues={{
         username: '',
         email: '',
       }}
       onSubmit={values => {
        
         console.log(values);
       }}
     >
       {({ errors, touched, validateField, validateForm  }) => (
         <Form>
           <Field name="email" placeholder="E-mail" validate={validateEmail} />
           {errors.email && touched.email && <div>{errors.email}</div>}<br/>
           <br/>
 
           <Field name="username" placeholder="Username" validate={validateUsername} />
           {errors.username && touched.username && <div>{errors.username}</div>}<br/>
           <br/>
           <button type="button" onClick={() => validateField('username')}>
             Check Username
           </button><br/><br/>
           <button
             type="button"
             onClick={() => validateForm().then(() => console.log('blah'))}
           >
             Validate All
           </button><br/>
           <br/>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
  </div>
}

export default Formval;
