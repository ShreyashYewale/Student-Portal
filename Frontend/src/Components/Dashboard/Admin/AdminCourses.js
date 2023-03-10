import React, { useState,useEffect } from 'react';
import FileBase64 from 'react-file-base64';
const axios = require('axios');

const AdminCourses = () => {
  const [values, setvalues] = useState({
    name: '',
    description: '',
    link: '',
    error:false,
    success:false
  });
  const { name, description, link,photo,error, success} = values;

 const handleChange = (name) => (event) => {
   setvalues({ ...values, [name]: event.target.value });
 };
useEffect(() => {
  setTimeout(() => {
    setvalues({ success: false, error: false });
  }, 2000);
}, [success, error]);
  const onFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/admin/addcourses', {
        name: name,
        description: description,
        link: link,
        photo: photo,
      })
      .then((req, res) => {
        setvalues({success:true})
      })
      .catch((err) => {
         setvalues({error:true})
      });
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
          <h6>Course Not Added.</h6>
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
            <h6>Course Added Successfully</h6>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className='align-items-center justify-content-between'>
        <div
          className='container'
          style={{
            justifyContent: 'center',
            display: 'flex',
            marginTop: '20px'
          }}>
          <h3>Add New Course Here</h3>
        </div>
        {successMessage()}
        {errorMessage()}
        <form onSubmit={onFormSubmit}>
          <div className='container-2' style={{ marginTop: '20px' }}>
            <div
              className='username-container'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <input
                className='form-control form-control-lg mt-2'
                type='text'
                required
                placeholder='Title of Course'
                onChange={handleChange('name')}
                value={name}
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
              <input
                className='form-control form-control-lg mt-4'
                type='text'
                required
                onChange={handleChange('description')}
                value={description}
                placeholder='Description of Course'
                style={{
                  width: `350px`,
                  borderRadius: 10,
                  height: '100px',
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
              <input
                className='form-control form-control-lg mt-4'
                type='text'
                required
                placeholder='Paste Course Link Here'
                onChange={handleChange('link')}
                value={link}
                accept='image'
                style={{
                  width: `350px`,
                  borderRadius: 10,
                  height: '35px',
                  border: '1px solid #F3EFE0'
                }}
              />
            </div>
            <div
              className='username-container'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
           
              <div className='form-group mt-4'>
                <label className='btn btn-block'>
                  Upload Image
                  <FileBase64
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) =>
                      setvalues({ ...values, photo: base64 })
                    }
                  />
                </label>
              </div>
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
                Add Course
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCourses;
/**/