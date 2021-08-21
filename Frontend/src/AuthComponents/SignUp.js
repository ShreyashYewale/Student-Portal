import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios');
const SignUp = () => {
  const [values, setvalues] = useState({
    email: '',
    username: '',
    collegename: '',
    password: '',
    error: '',
    success: false
  });
  const { email, username, collegename, password, error, success } = values;
  const handleChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };
  const successMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-2 mt-2'>
          <div
            className='alert alert-success'
            style={{
              display: success ? '' : 'none',
              fontSize: '12',
              width: '450px',
              height: '55px'
            }}>
            <h6>New account was created successfully </h6>
          </div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className='row'>
        <div
          className='alert alert-danger mt-2 col-md-6 offset-sm-3'
          style={{
            display: error ? '' : 'none',
            fontSize: '12',
            height: '55px',
            textAlign: 'center'
          }}>
          Unable to create account..!
        </div>
      </div>
    );
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const selectrole = document.querySelector('#selectrole');
    let role = '';

    if (selectrole.value === 'Admin') role = '/admin/createaccount';
    else if (selectrole.value === 'Faculty') role = '/faculty/createaccount';
    else if (selectrole.value === 'Student') role = '/student/createaccount';
    else if (selectrole.value === 'Select Your Role')
      setvalues({ message: 'Please select your role' });
    axios
      .post(`${role}`, {
        username: username,
        email: email,
        password: password,
        college_name: collegename
      })
      .then(function (response) {
        setvalues({
          ...values,
          email: '',
          username: '',
          collegename: '',
          password: '',
          error: '',
          success: true
        });
        const { data } = response;
        console.log('Account Created Successfully', data);
      })
      .catch(function (error) {
        setvalues({ ...values, error: true, success: false });
        console.error('Account Creation Failed');
      });
  };
  return (
    <div className='mt-4 align-items-center justify-content-between'>
      <div className='text-center text-white'>
        <h2
          style={{
            fontWeight: '600',
            fontSize: '32px',
            display: 'inline-block',
            color: 'black'
          }}>
          Create New Account Here
        </h2>
      </div>
      <form
        onSubmit={onFormSubmit}
        className=' p-4 text-center align-items-center justify-content-between'>
        {successMessage()}
        {errorMessage()}
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
            type='text'
            required
            onChange={handleChange('username')}
            value={username}
            placeholder='UserName'
            style={{
              width: `350px`,
              borderRadius: 10,
              height: '35px',
              border: '1px solid #F3EFE0'
            }}></input>
          <input
            className='form-control form-control-lg mt-4'
            type='text'
            onChange={handleChange('collegename')}
            value={collegename}
            required
            placeholder='College Name'
            style={{
              width: `350px`,
              borderRadius: 10,
              height: '35px',
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
          <select
            id='selectrole'
            className='form-select form-select-lg mt-4 mb-3'
            aria-label='.form-select-lg example'
            style={{ width: '350px' }}>
            <option value='Select Your Role' selected>
              Select Your Role
            </option>
            <option value='Admin'>Admin</option>
            <option value='Faculty'>Faculty</option>
            <option value='Student'>Student</option>
          </select>
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
      </form>
    </div>
  );
};
export default SignUp;
