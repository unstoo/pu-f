import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Component = ({ children }) => (
  <div className={style['component-style']}>
    <h2>{children}</h2>
  </div>
);

Component.propTypes = {
  children: PropTypes.string,
};

export default Component;
