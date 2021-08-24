import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../Context/Context';
const axios=require('axios');
const FacultyProfile = () => {
  const { currentUser, setcurrentUser } = useContext(AppContext);
  const [username, setusername] = useState(currentUser.username);
  const [collegename, setCollegename] = useState(currentUser.college_name);
  const [values, setvalues] = useState({ error: false, success: false });
  const { error, success } = values;
  const idn = currentUser._id;
  const handleChange = (e) => {
    e.preventDefault();
    axios.put('/faculty/updatefacultyinfo', { _id:idn,username:username, college_name: collegename })
      .then((req, res) => {
        setvalues({ success: true,error:false });
         console.log(username, collegename,idn);
      }).catch((err) => {
         setvalues({ error: true,success:false });
      })
   
  };
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
          <h6>Profile Data Not Updated</h6>
        </div>
      </div>
    );
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
            <h6>Successfully Updated Data</h6>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='align-items-center justify-content-between'>
      <div
        className='container'
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: '20px'
        }}>
        <h3>Your Profile Details</h3>
      </div>
      {successMessage()}
      {errorMessage()}
      <form onSubmit={handleChange}>
        <div className='container-2' style={{ marginTop: '20px' }}>
          <div
            className='email-container'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <span
              style={{
                fontSize: '20px',
                fontFamily: 'bold',
                color: 'black',
                marginRight: '20px'
              }}>
              Email:
            </span>

            <input
              className='form-control form-control-lg  align-items-center'
              type='email'
              required
              readonly
              title='You cannot update email'
              value={currentUser.email}
              style={{
                width: `350px`,
                height: '35px',
                borderRadius: 10,
                border: '1px solid #F3EFE0'
              }}></input>
          </div>
          <div
            className='username-container'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <span
              style={{
                fontSize: '20px',
                fontFamily: 'bold',
                color: 'black',
                marginRight: '10px',
                marginTop: '20px'
              }}>
              Username:
            </span>
            <input
              className='form-control form-control-lg mt-4'
              type='text'
              required
              placeholder='UserName'
              onChange={(e) => setusername(e.target.value)}
              value={username}
              style={{
                width: `350px`,
                borderRadius: 10,
                height: '35px',
                border: '1px solid #F3EFE0'
              }}></input>
          </div>
          <div
            className='collegename-container'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <span
              style={{
                fontSize: '20px',
                fontFamily: 'bold',
                color: 'black',
                marginRight: '10px',
                marginTop: '20px'
              }}>
              College Name:
            </span>
            <input
              className='form-control form-control-lg mt-4'
              type='text'
              required
              onChange={(e) => setCollegename(e.target.value)}
              value={collegename}
              placeholder='College Name'
              style={{
                width: `350px`,
                borderRadius: 10,
                height: '35px',
                border: '1px solid #F3EFE0'
              }}></input>
          </div>
          <div
            className='role-container'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <span
              style={{
                fontSize: '20px',
                fontFamily: 'bold',
                color: 'black',
                marginRight: '20px',
                marginTop: '20px'
              }}>
              Role:
            </span>
            <input
              className='form-control form-control-lg mt-4'
              type='text'
              required
              readonly
              value={currentUser.role}
              placeholder='Password'
              style={{
                width: `350px`,
                borderRadius: 10,
                height: '35px',
                border: '1px solid #F3EFE0'
              }}
            />
          </div>
          <div
            className='button-container'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <button
              className='mt-4'
              type='submit'
              style={{
                width: 250,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#5f43bd',
                color: '#fff',
                fontWeight: 600,
                border: '1px solid transparent',
                fontSize: 16,
                marginTop: 40
              }}>
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FacultyProfile;
