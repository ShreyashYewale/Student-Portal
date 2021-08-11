import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div>
      <div id='Contact Us'></div>
      <center>
        <h3
          style={{
            color: '#5f43bd',
            fontWeight: 600,
            fontSize: `40px`,
            marginTop: `45px`
          }}>
          <FontAwesomeIcon
            icon={faAddressBook}
            style={{
              color: '#5f43bd',
              fontWeight: 600,
              fontSize: `40px`,
              marginTop: `45px`,
              marginRight: '20px'
            }}
          />
          Have Some Questions?
        </h3>
      </center>
      <div className='row'>
        <div className='col-6 xs-12 mt-2'>
          <img
            alt='gallery'
            src={process.env.PUBLIC_URL + '/Images/email.gif'}
            style={{
              justifyItems: 'center',
              alignItems: 'center',
              float: 'right',
              width: 400,
              height: 400,
              marginRight: 40
            }}
          />
        </div>
        <div className='col-4 xs-12 mt-4 ml-4'>
          <div>
            <input
              className='form-control form-control-lg mx-sm-3 mt-4'
              type='text'
              placeholder='Name'
              style={{
                width: 400,
                borderRadius: 10
              }}>
            </input>
          </div>
          <input
            className='form-control form-control-lg mx-sm-3 mt-4'
            type='text'
            placeholder='Email'
            style={{
              width: 400,
              borderRadius: 10
            }}
          />
          <input
            className='form-control form-control-lg mx-sm-3 mt-4'
            type='Number'
            placeholder='Contact No'
            style={{
              width: 400,
              borderRadius: 10
            }}
          />
          <input
            className='form-control form-control-lg mx-sm-3 mt-4 mb-4'
            type='text'
            placeholder='Description/Query'
            style={{
              width: 400,
              height: 100,
              borderRadius: 10
            }}
          />
          <center>
            <button
              className='mt-2'
              style={{
                width: 280,
                height: 50,
                borderRadius: 10,
                backgroundColor: '#5f43bd',
                color: '#fff',
                fontWeight: 600,
                border: '1px solid #5f43bd',
                marginLeft: 40,
                fontSize: 20
              }}>
              Send Message
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Contact;
