import React, { useState, useEffect } from 'react';
import { Link,Redirect} from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
const axios = require('axios');
const SignIn = () => {
  const [values, setvalues] = useState({
    email: '',
    password: '',
    error: false,
    success: false,
    message: '',
    redirect: false
  });
  const [isVerified, setisVerified] = useState(false);

  const { email, password, error, success, message,redirect } =
    values;
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const successMessage = () => {
    return (
      <div className='row '>
        <div className='col-md-6 offset-sm-2 mt-2'>
          <div
            className='alert alert-success'
            style={{
              display: success ? '' : 'none',
              fontSize: '12',
              width: '450px',
              height: '55px'
            }}>
            <h6>Successfully Logged In</h6>
          </div>
        </div>
      </div>
    );
  };
  function onIsVerified() {
    setisVerified({ isVerified: true });
  }
  const errorMessage = () => {
    return (
      <div className='row '>
        <div
          className='alert alert-danger mt-2 col-md-6 offset-sm-3'
          style={{
            display: error ? '' : 'none',
            fontSize: '12',
            height: '55px',
            textAlign: 'center'
          }}>
          {message}
        </div>
      </div>
    );
  };
  /*Redirect*/
  const performRedirect=()=>
  {
    if (redirect) {
        return(<Redirect to="/dashboard"></Redirect>)
      }
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    const selectrole = document.querySelector("#selectrole")
    let role='';
    if (selectrole.value === 'Admin')
      role = '/admin/signin'
    else if (selectrole.value === 'Faculty')
      role = '/faculty/signin'
    else if (selectrole.value === 'Student')
      role = '/student/signin'
    else if(selectrole.value==='Select Your Role')
      setvalues({ message: 'Please select your role' });
    if (!isVerified) {
      setvalues({
        ...values,
        error: true,
        success: false,
        message: 'Please Verify that you are Not ROBOT'
      });
    } else {
      setvalues({ ...values, error: false });
      axios
        .post(`${ role }`, {
          email: email,
          password: password
        })
        .then(function (response) {
          setvalues({
            ...values,
            email: '',
            password: '',
            error: '',
            success: true,
            redirect: true
          });
          const { data } = response;
          console.log('Successfully Signed In', data);
        })
        .catch(function (error) {
          setvalues({
            ...values,
            error: true,
            success: false,
            message: 'Please Enter Valid Credentials'
          });
          console.error('Please Enter valid credentials');
        });
    }
  };
  return (
    <div
      className='p-4 align-items-center justify-content-between text-center'
      style={{
        backgroundImage: `url('/Images/signin_background.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        verticalAlign: 'middle',
        overflow: 'hidden',
        width: `100vw`,
        height: `100vh`
      }}>
      <div className='container-fluid'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-md-6'>
            <div className='mt-1 align-items-center justify-content-between'>
              <div className='text-center text-white'>
                <h2
                  style={{
                    fontWeight: '600',
                    fontSize: '32px',
                    display: 'inline-block'
                  }}>
                  Sign In Here
                </h2>
              </div>
              <form
                onSubmit={onFormSubmit}
                className=' p-4 text-center align-items-center justify-content-between'>
                <button
                  className=''
                  style={{
                    width: 280,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontWeight: 600,
                    border: '1px solid #F3EFE0',
                    fontSize: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <img
                    style={{ float: 'left', marginLeft: 25, marginTop: 5 }}
                    src='https://img.icons8.com/color/16/000000/google-logo.png'
                    width='20'
                    height='20'
                    alt='logo'></img>
                  Sign in With Google
                </button>
                {successMessage()}
                {errorMessage()}
                {performRedirect()}
                <center>
                  <input
                    className='form-control form-control-lg mt-3 align-items-center'
                    type='email'
                    required
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                    style={{
                      width: `350px`,
                      height: '35px',
                      borderRadius: 10,
                      border: '1px solid #F3EFE0'
                    }}></input>
                  <input
                    className='form-control form-control-lg mt-4'
                    type='password'
                    pattern='^[^\r\n]*.{8,32}$'
                    title='Please Enter the valid Password between 8 to 32'
                    required
                    onChange={handleChange('password')}
                    value={password}
                    placeholder='Password'
                    style={{
                      width: `350px`,
                      borderRadius: 10,
                      height: '35px',
                      border: '1px solid #F3EFE0'
                    }}
                  />
                  <select id='selectrole'
                    className='form-select form-select-lg mt-4 mb-3'
                    aria-label='.form-select-lg example'
                    style={{ width: '350px' }}>
                    <option value="Select Your Role" selected>Select Your Role</option>
                    <option value='Admin'>Admin</option>
                    <option value='Faculty'>Faculty</option>
                    <option value='Student'>Student</option>
                  </select>
                  <ReCAPTCHA
                    sitekey='6LcXLgMcAAAAAH_DXCYa_TGIU0qkDIHsvz0GKq3w'
                    onChange={onIsVerified}
                    className='align-items-center mt-4'
                  />
                </center>
                <button
                  className='mt-4'
                  type='submit'
                  style={{
                    width: 280,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#5f43bd',
                    color: '#fff',
                    fontWeight: 600,
                    border: '1px solid transparent',
                    fontSize: 16,
                    marginTop: 40
                  }}>
                  Create Account
                </button>
                <div className='mt-3'>
                  <a
                    className='text-white p-3'
                    style={{
                      left: '80%',
                      textAlign: 'center'
                    }}>
                    Already Registered?
                  </a>
                  <a
                    style={{
                      color: '#d9c2ff',
                      paddingBottom: '2px',
                      borderBottom: '1px solid #d9c2ff'
                    }}
                    href='/signin'>
                    Sign In Here
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-6 d-md-block d-sm-none text-center justify-content-between align-items-center'>
            <img
              className='img-fluid w-50'
              src={process.env.PUBLIC_URL + '/Images/security_illustration.svg'}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
