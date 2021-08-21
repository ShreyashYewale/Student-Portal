import React, { useContext, useEffect, useState } from 'react';
import SignUp from '../../AuthComponents/SignUp';
import Profile from './Options/Profile';
import ManageStudent from './Options/ManageStudent';
// Context
import { DashboardContext } from '../../Context/Context';

const MainContentPane1 = () => {
  const { currentSelectedOption } = useContext(DashboardContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className='contents-container'>
      {isLoaded ? (
        <div className='default-content-container align-items-center justify-content-between'>
          {currentSelectedOption === null ? (
            <h1>Home Page</h1>
          ) : currentSelectedOption === 'Profile' ? (
            <Profile />
          ) : currentSelectedOption === 'Create Account' ? (
            <SignUp/>
          ) : currentSelectedOption === 'Manage Student' ? (
            <ManageStudent/>
          ) : currentSelectedOption === 'Manage Faculty' ? (
            <h1>Attendance</h1>
          ) : currentSelectedOption === 'Attendance' ? (
            <h1>Progress</h1>
          ) : currentSelectedOption === 'Classes' ? (
            <h1>Links</h1>
          ) : currentSelectedOption === 'Courses' ? (
            <h1>Links</h1>
          ) : currentSelectedOption === 'Handle Queries' ? (
            <h1>Links</h1>
          ) : currentSelectedOption === 'Logout' ? (
            <h1>Links</h1>
          ) : (
            'Item selected'
          )}
        </div>
      ) : (
        <div className='content-loader-container'>
          <div
            className='spinner-border text-dark'
            style={{ width: `3rem`, height: `3rem` }}
            role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContentPane1;
