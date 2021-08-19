import React,{useState, useEffect }from 'react';

const MainDashboard = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);
    return (
      <div>
        {loading ? (
          <div>
            <h1>Welcome to Dashboard</h1>
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
}

export default MainDashboard;
