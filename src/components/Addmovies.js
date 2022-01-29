import React from 'react';
import {useFormik} from 'formik';
import {useNavigate} from 'react-router-dom'
import * as yup from'yup';
import axios from 'axios'

function Addmovies() {
  let navigate= useNavigate();
  const url="https://61f497b610f0f7001768c981.mockapi.io/movies/"
  let handleSubmit =async(values)=>{
    try{
      let response = await axios.post(url,values)
      console.log(response);
       navigate('/all-movies')       
    }catch(error)
    {
      console.log(error);
    }
  }
  const formik = useFormik({
    initialValues:{
        fn:'',
        ln:'',
        name:'',
        email:'',
        password:'',
        mobile:'',
        rating:'',
    },
    validationSchema: yup.object({
        fn:yup.string().min(2,'Too short!').max(50,'Too long!').required('Required'),
        ln:yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        name:yup.string().required('Required'),
        email:yup.string().email('Invalid Email').required('Required'),
        password:yup.string().required('No Password Provided').min(8, 'Password is too short').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain One Uppercase, One Lowercase, One Number and one special case Character"),
        mobile:yup.string().matches(/^\d{10}$/,"Mobile number not valid").required('Required'),
        rating:yup.string(),
    }),
    onSubmit:values=>{
        console.log(values)
        handleSubmit(values)
    }

})
  return <div>
      <h3>ADD MOVIES</h3>
      <form onSubmit ={formik.handleSubmit}>
        <div className='form-group'>
        <label for='fn'>FName</label>
            <input
            id="fn"
            name='fn'
            type='text'
            className='form-control'
            placeholder='Enter Movie Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fn}
            />
            {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
        </div>
        <div className='form-group'>          
            <label for='ln'>LName</label>
            <input
            id="ln"
            name='ln'
            type='text'
            className='form-control'
            placeholder='Enter Movie Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.ln}
            />
            {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
        </div>
        <div className='form-group'>          
            <label for='name'>Movie Name</label>
            <input
            id="name"
            name='name'
            type='text'
            className='form-control'
            placeholder='Enter Movie Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Email</label>
            <input
            id="email"
            name='email'
            type='email'
            className='form-control'
            placeholder='Enter email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Password</label>
            <input
            id="password"
            name='password'
            type='text'
            className='form-control'
            placeholder='Enter Password'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password?<div style={{color:'red'}}>{formik.errors.password}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Mobile</label>
            <input
            id="mobile"
            name='mobile'
            type='text'
            className='form-control'
            placeholder='Enter Mobile'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile?<div style={{color:'red'}}>{formik.errors.mobile}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Rating</label>
            <input
            id="rating"
            name='rating'
            type='number'
            className='form-control'
            placeholder='Enter rating'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
            />
            {formik.touched.class && formik.errors.class?<div style={{color:'red'}}>{formik.errors.class}</div>:null}
        </div>
        
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        
        </form>

      </div>;
}

export default Addmovies;
