import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../Context/Context';
const axios = require('axios');
const AdminHandleQueries = () => {
  const { currentUser } = useContext(AppContext);
  const [queriesdata, setqueriesdata] = useState([]);
  useEffect(() => {
    axios
      .get('/admin/getallqueries')
      .then((res) => {
        const { data } = res;
        setqueriesdata([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const toggleMoreInfoSection = (e) => {
    const item = e.currentTarget.childNodes[1];
    if (item.style.height === '50px') {
      item.style.height = `0px`;
    } else {
      item.style.height = `50px`;
    }
  };
  return (
    <div>
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          marginTop: '10px'
        }}>
        Queries Received
      </span>
      <div>
        <ul className='manage-container'>
          {queriesdata.length !== 0 ? (
            <>
              {queriesdata.map((item, index) => (
                <li
                  key={index}
                  className='manage-item'
                  onClick={(e) => toggleMoreInfoSection(e)}>
                  <div className='main-details'>
                    <div className='index'>{index + 1}.</div>
                    <div className='username' style={{ fontSize: '18px' }}>
                      {item.queries}
                    </div>
                    <div className='enable-disable-btn'>
                      <button className='btn btn-success btn-sm'>Accept</button>
                    </div>
                    <div className='delete-btn'>
                      <button className='btn btn-danger btn-sm'>Delete</button>
                    </div>
                  </div>
                  <div className='more-details'>
                    <span
                      style={{
                        marginLeft: '20px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}>
                      Student Name: {item.role}
                    </span>
                    <br></br>
                    <span
                      style={{
                        marginLeft: '20px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                      }}>
                      Student Email: {item.email}
                    </span>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <li className='manage-item'>
              <div className='main-details'>
                <div className='username'>No Queries Submitted</div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminHandleQueries;
