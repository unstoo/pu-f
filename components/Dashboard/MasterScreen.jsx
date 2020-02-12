import React from 'react';
import PropTypes from 'prop-types';
import masterScreen from './master-screen.css';

const MasterScreen = ({ children }) => (
  <div className={masterScreen['master-screen']}>{children}</div>
);

MasterScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default MasterScreen;
