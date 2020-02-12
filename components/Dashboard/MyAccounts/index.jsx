/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
import React from 'react';
import ButtonStd from '../ButtonStd';
import style from './style.css';
// import PropTypes from 'prop-types';

const accountsData = [
  {
    currency: 'eur',
    balance: '150 028,63',
    income: '18 563,48',
    expense: '18 563,48',
  },
  {
    currency: 'usd',
    balance: '150 028,63',
    income: '18 563,48',
    expense: '18 563,48',
  },
];

const MyAccounts = () => (
  <div className={style['component-style']}>
    <h2 className={style.header}>My accounts</h2>
    <ul className={style['accounts-list']}>
      <Account data={accountsData[0]} />
      <NewAccountPlaceholder />
      {/* <Account data={accountsData[1]} /> */}
    </ul>
  </div>
);

const Account = ({ data }) => {
  const { currency, balance, income, expense } = data;
  return (
    <li className={style.account}>
      <div className={style.accountBalanceRow}>
        <div
          aria-label={`Account currency: ${currency}`}
          className={style['accountCurrency-' + currency]}
        ></div>
        <div className={style.accountBalance}>{balance}</div>
      </div>
      <div className={style.accountIncome}>
        <div className={style['icon-income']}>Income</div>
        <div>{income}</div>
      </div>
      <div className={style.accountExpense}>
        <div className={style['icon-expense']}>Expense</div>
        <div>{expense}</div>
      </div>
      <div className={style.buttonsRow}>
        <ButtonStd>ADD FUNDS</ButtonStd>
        <ButtonStd buttonIcon="arrow">SEND FUNDS</ButtonStd>
      </div>
    </li>
  );
};

const NewAccountPlaceholder = () => {
  return (
    <li className={style.accountPlaceholder}>
      <button
        className={style.addAccountButton}
        aria-label="Add new account"
        type="button"
      ></button>
    </li>
  );
};

// MyAccounts.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   data: PropTypes.any,
// };

export default MyAccounts;
