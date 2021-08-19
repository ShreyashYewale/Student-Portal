import React, { useState, useEffect } from 'react';
import Navbar1 from '../Components/Dashboard/Navbar1';
import Content1 from '../Components/Dashboard/Content1';
import { DashboardContext } from '../Context/Context';
const MainDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <DashboardContext.Provider
            value={{
              currentSelectedOption,
              setCurrentSelectedOption
            }}>
            <div style={{ height: '75px' }}></div>
            <Navbar1 />
            <Content1 />
          </DashboardContext.Provider>
        </div>
      ) : (
        <div className='homepage-loader'>
          <div
            className='spinner-border text-white'
            style={{ width: `3rem`, height: `3rem` }}
            role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainDashboard;
