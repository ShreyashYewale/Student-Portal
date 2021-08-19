import React, { useContext } from 'react';

// Context
import { DashboardContext } from '../../../Context/Context';

const IndividualListItems1 = ({ title, icon }) => {
  const { setCurrentSelectedOption } = useContext(DashboardContext);
  return (
    <a
      href={`#${title}`}
      className='list-group-item list-group-item-action list-group-item-light'
      onClick={() => setCurrentSelectedOption(title)}>
      <i className={icon}></i>
      <span className='mb-1'>{title}</span>
    </a>
  );
};

export default IndividualListItems1;
