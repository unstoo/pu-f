/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import style from './style.module.css';

const LastOperations = ({ operations }) => (
  <div className={style['component-style']}>
    <div className={style.headerRow}>
      <h2 className={style.header}>Last operations</h2>
      <div className={style.arrow}> ›</div>
    </div>
    <ul className={style.transactionsList}>
      {operations &&
        operations.map(operation => (
          <Operation
            key={
              'operation-' +
              operation.date +
              operation.label +
              operation.transactionType
            }
            data={operation}
          />
        ))}
    </ul>
  </div>
);


const Operation = ({ data }) => {
  const { transactionType, status, amount, currency, date, label } = data;
  return (
    <li className={style.tx}>
      <div className={style['tx-col1']}>
        <div
          aria-label={`transation type: ${transactionType}`}
          className={style['icon-tx-' + transactionType]}
        ></div>
        {status === 'pending' && (
          <button
            title="Repeat this transaction"
            type="button"
            aria-label="Repeat transaction"
            className={style['icon-tx-' + status]}
          ></button>
        )}
      </div>
      <div className={style['tx-col2']}>
        <div className={style.label}>{label}</div>
        <div className={style.date}>{date}</div>
      </div>
      <div
        className={[style['tx-col3'], style['color--' + transactionType]].join(
          ' ',
        )}
      >
        {transactionType === 'credit' ? '+' : '-'}
        <div className={style.amount}>{amount}&nbsp;</div>
        <div className={style.currency}>{currency}</div>
      </div>
    </li>
  );
};

export default LastOperations;
