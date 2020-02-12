import React from 'react';
import PropTypes from 'prop-types';
import transactionScreen from './transaction-screen.css';

const TranscationScreen = ({ children }) => (
  <div className={transactionScreen['transaction-screen']}>{children}</div>
);

TranscationScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default TranscationScreen;
