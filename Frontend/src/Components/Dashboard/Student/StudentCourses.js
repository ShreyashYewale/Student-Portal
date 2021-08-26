import React, { useState, useEffect } from 'react';
const axios = require('axios');
const StudentCourses = () => {
  const [coursesdata, setcoursesdata] = useState([]);
  useEffect(() => {
    axios
      .get('/admin/getAllCourses')
      .then((res) => {
        console.log(res.data);
        const { data } = res;
        setcoursesdata([...data]);
        console.log(coursesdata.photo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='mt-4 row'>
      {coursesdata.map((item, index) => {
        return (
          <div
            key={index}
            className='card mt-4 col-4 m-4'
              style={{
                width: '18rem',
                borderRadius: 10,
                border: `1px solid #000`,
                height: `100%`
              }}>
              <img class='card-img-top' src={item.photo} alt='Card image cap' />
              <div
                className='card-body mt-2'
                style={{
                  borderTop: `0.5px solid #000`
                }}>
                <h3>
                  <div className='title'>{item.name}</div>
                </h3>
                <h6>
                  <div className='card-title'>CourseDescription</div>
                </h6>
                <p class='card-text'>{item.description}</p>
                <a href={item.link} class='card-link'>
                  <button>Explore</button>
                </a>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default StudentCourses;
