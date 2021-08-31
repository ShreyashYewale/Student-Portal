import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../Context/Context';
const axios = require('axios');

const StudentQueries = () => {
  const { currentUser } = useContext(AppContext);
  const [query, setquery] = useState(null);
  const [values, setvalues] = useState({ error: false, success: false });
  const { error, success } = values;
  useEffect(() => {
    setTimeout(() => {
      setvalues({ success: false });
    }, 3000);
  }, [success]);
  const errorMessage = () => {
    return (
      <div className='row '>
        <div
          className='alert alert-danger mt-2 col-xs-8 col-lg-4 offset-sm-1'
          style={{
            display: error ? '' : 'none',
            fontSize: '12',
            height: '55px',
            textAlign: 'center'
          }}>
          <h6>Query Not Submitted</h6>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className='row'>
        <div
          className='col-xs-8 col-lg-2 alert alert-success'
          style={{
            display: success ? '' : 'none',
            fontSize: '12',
            width: '450px',
            height: '55px'
          }}>
          <h6>Query Submitted Successfully.Will reach you soon</h6>
        </div>
      </div>
    );
  };
  const submitQuery = (e) => {
    e.preventDefault();
    axios
      .post('/student/submitquery', {
        queries: query,
        email:currentUser.email,
        role:currentUser.role
      })
      .then((req, res) => {
        setvalues({ success: true, error: false });
        setquery('');
      })
      .catch((err) => {
        setvalues({ error: true, success: false });
      });
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '20px',
          justifyContent: 'center'
        }}>
        <h2>Stuck Somewhere?No Worries</h2>
      </div>
      <div className='row' style={{ marginTop: '70px' }}>
        <div className='col-lg-7 col-xs-12'>
          <span
            style={{
              fontSize: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            Some Commonly asked Queries
          </span>
          <div className='accordion mt-4' id='accordionPanelsStayOpenExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
                <button
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#panelsStayOpen-collapseOne'
                  aria-expanded='true'
                  aria-controls='panelsStayOpen-collapseOne'>
                  <h5>How to update Profile?</h5>
                </button>
              </h2>
              <div
                id='panelsStayOpen-collapseOne'
                class='accordion-collapse collapse show'
                aria-labelledby='panelsStayOpen-headingOne'>
                <div className='accordion-body'>
                  You can Update Profile by doing following Steps:<br></br>
                  1:Go to Profile Section<br></br>
                  2:You can only Update your UserName and College Name<br></br>
                  3:Once you changed it click on 'Update Profile button'
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#panelsStayOpen-collapseTwo'
                  aria-expanded='false'
                  aria-controls='panelsStayOpen-collapseTwo'>
                  <h5>Not able to see Courses in Courses Section?</h5>
                </button>
              </h2>
              <div
                id='panelsStayOpen-collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='panelsStayOpen-headingTwo'>
                <div className='accordion-body'></div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='panelsStayOpen-headingThree'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#panelsStayOpen-collapseThree'
                  aria-expanded='false'
                  aria-controls='panelsStayOpen-collapseThree'>
                  <h5>Not able to join class?</h5>
                </button>
              </h2>
              <div
                id='panelsStayOpen-collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='panelsStayOpen-headingThree'>
                <div className='accordion-body'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-5 col-xs-12'>
          <span
            style={{
              fontSize: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            Write Your Custom Query..!
          </span>
          {successMessage()}
          {errorMessage()}
          <input
            className='form-control form-control-lg mt-4'
            type='text'
            required
            onChange={(e) => setquery(e.target.value)}
            value={query}
            placeholder='Enter Your Query Here'
            style={{
              width: `350px`,
              borderRadius: 10,
              height: '100px',
              border: '1px solid #F3EFE0'
            }}></input>
          <button
            className='mt-4'
            type='submit'
            onClick={submitQuery}
            style={{
              width: 200,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#188f06',
              color: '#fff',
              fontWeight: 600,
              border: '1px solid transparent',
              fontSize: 16,
              marginTop: 40,
              marginLeft: '80px'
            }}>
            Submit Query
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentQueries;
