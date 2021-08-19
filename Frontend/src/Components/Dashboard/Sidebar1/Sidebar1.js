import React from 'react';
import IndividualListItems1 from './IndividualListItems1';

const Sidebar1 = () => {
  return (
    <div className='sidebar-container'>
      <div className='list-group align-items-center'>
        <IndividualListItems1
          title='Profile'
          icon='bi bi-person-circle icons'
        />
        <IndividualListItems1
          title='Create Account'
          icon='bi bi-person-plus-fill icons'
        />
        <IndividualListItems1
          title='Manage Student'
          icon='bi bi-person-lines-fill icons'
        />
        <IndividualListItems1
          title='Manage Faculty'
          icon='bi bi-people-fill icons'
        />
        <IndividualListItems1
          title='Attendance'
          icon='bi bi-calendar-check icons'
        />
        <IndividualListItems1 title='Classes' icon='bi bi-book icons' />
        <IndividualListItems1 title='Courses' icon='bi bi-bookmark icons' />
        <IndividualListItems1 title='Handle Queries' icon='bi bi-chat icons' />
        <IndividualListItems1 title='Logout' icon='bi bi-arrow-clockwise icons' />
      </div>
    </div>
  );
};

export default Sidebar1;
