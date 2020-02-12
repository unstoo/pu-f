import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Button = ({ children }) => (
  <button type="button" className={style['component-style']}>
    <div className={style.buttonRow}>
      <div>{children}</div>
      <div className={style['icon-logout']}></div>
    </div>
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
