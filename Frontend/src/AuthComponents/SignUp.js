import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignUp = () => {
  return (
    <div className='container'>
      <div className='mt-4 align-center justifyItems'>
        <div className='text-center'>
          <h2
            style={{
              color: '#000000',
              fontWeight: '600',
              fontSize: '32px',
              display: 'inline-block'
            }}>
            Sign Up Here
          </h2>
        </div>
        <div className='mt-2 p-4 align-center'>
          <button
            className='mt-2'
            style={{
              width: 280,
              height: 50,
              borderRadius: 50,
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 600,
              border: '1px solid #F3EFE0',
              marginLeft: 40,
              fontSize: 16,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <img
              style={{ float: 'left', marginLeft: 25, marginTop: 5 }}
              src='https://img.icons8.com/color/16/000000/google-logo.png'
              width='20'
              height='20'></img>
            Sign in With Google
          </button>
          <input
            className='form-control form-control-lg mx-sm-3 mt-4'
            type='text'
            placeholder='Email'
            style={{
              width: 350,
              borderRadius: 10,
              border: '1px solid #F3EFE0'
            }}>
          </input>
          <input
            className='form-control form-control-lg mx-sm-3 mt-4'
            type='text'
            placeholder='UserName'
            style={{
              width: 350,
              borderRadius: 10,
              border: '1px solid #F3EFE0'
            }}></input>
          <input
            className='form-control form-control-lg mx-sm-3 mt-4'
            type='text'
            placeholder='College Name'
            style={{
              width: 350,
              borderRadius: 10,
              border: '1px solid #F3EFE0'
            }}></input>

          <input
            className='form-control form-control-lg mx-sm-3 mt-4'
            type='password'
            placeholder='Password'
            style={{
              width: 350,
              borderRadius: 10,
              border: '1px solid #F3EFE0'
            }}
          />
          <button
            className='mt-4'
            style={{
              width: 280,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#5f43bd',
              color: '#fff',
              fontWeight: 600,
              border: '1px solid #F3EFE0',
              marginLeft: 40,
              fontSize: 16,
              marginTop: 40
            }}>
            Create Account
          </button>
          <p
            className='mt-4'
            style={{ left: '80%', textAlign: 'center', fontSize: 18 }}>
            Already Registered?
            <a style={{ color: '#4a43bd' }} href='/signin'>
              Sign In Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
