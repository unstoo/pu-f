import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const SearchBlock = ({ children }) => (
  <div className={style['component-style']}>{children}</div>
);

SearchBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default SearchBlock;
