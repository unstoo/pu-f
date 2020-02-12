/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import ButtonStd from '../ButtonStd';
import style from './style.css';

const CurrencyExchenger = () => {
  const currenciesList = [{ currency: 'eur' }, { currency: 'usd' }];

  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [currencyOne, setCurrencyOne] = useState('eur');
  const [currencyTwo, setCurrencyTwo] = useState('eur');
  // const [stateMonitor, setMonitor] = useState('nil');

  const exchangeHandler = e => {
    e.preventDefault();
    if (currencyOne === currencyTwo) {
      setInputTwo(inputOne);
    } else if (currencyOne === 'eur' && currencyTwo === 'usd') {
      const value = (inputOne * 1.1).toFixed(2);
      setInputTwo(value);
    } else if (currencyOne === 'usd' && currencyTwo === 'eur') {
      const value = (inputOne * 0.91).toFixed(2);
      setInputTwo(value);
    }
  };

  const inputChangeHandler = e => {
    const newValue = e.target.value;
    const ref = e.target.dataset.parentrefid;
    setInputOne(newValue);

    if (ref === 'one') {
      setInputOne(newValue);
    } else {
      setInputOne(inputOne);
      setInputTwo(newValue);
    }
  };

  const optionsChangeHandler = e => {
    const ref = e.target.dataset.parentrefid;
    const newCurrency = e.target.dataset.currency;
    // setMonitor(`ref: ${ref} - cur: ${newCurrency}`);

    if (ref === 'one') {
      setCurrencyOne(newCurrency);
    } else if (ref === 'two') {
      setCurrencyTwo(newCurrency);
    } else {
      throw Error(
        'Unknow parentrefid in inputChangeHandler received. Ref: ' + ref,
      );
    }
  };

  return (
    <div className={style['component-style']}>
      {/* <div className={style.componentStateMonitor}>
        {`
          inputOne: ${inputOne}
          currencyOne: ${currencyOne}
        `}
        <br />
        {`
          inputTwo: ${inputTwo}
          currencyTwo: ${currencyTwo}
        `}
        <br />
        {stateMonitor}
      </div> */}
      <div className={style.headerRow}>
        <h2 className={style.header}>Exchange currency</h2>
        <div className={style.arrow}> ›</div>
      </div>
      <form className={style.inputBlock}>
        <div className={style.inputRow}>
          <InputWithOptions
            parentRefId="one"
            value={inputOne}
            inputChangeHandler={inputChangeHandler}
            option={currencyOne}
            optionsList={currenciesList}
            optionsChangeHandler={optionsChangeHandler}
          />
          <div className={style['icon-exchange']} aria-label="an icon"></div>
          <InputWithOptions
            parentRefId="two"
            value={inputTwo}
            inputChangeHandler={inputChangeHandler}
            option={currencyTwo}
            optionsList={currenciesList}
            optionsChangeHandler={optionsChangeHandler}
          />
          {
            //
            //
            //
            //
            //
            //
          }
        </div>
        <div className={style.controlsRow}>
          <div className={style.infoBox}>
            <div className={style.info}>
              <span>Exchange Fee</span>
              <button type="button" className={style.button + ' ' + style.tip}>
                ?<span>1% (min. 1 EUR)</span>
              </button>
            </div>
            <div className={style.fee}>1 EUR</div>
          </div>
          <ButtonStd clickHandler={exchangeHandler} buttonIcon="exchange">
            EXCHANGE
          </ButtonStd>
        </div>
      </form>
    </div>
  );
};

const InputWithOptions = ({
  value,
  parentRefId,
  inputChangeHandler,
  optionsChangeHandler,
  optionsList,
  option,
}) => (
  <>
    <input
      value={value}
      onChange={e => inputChangeHandler(e)}
      data-parentrefid={parentRefId}
      className={style.input}
      type="number"
      placeholder="0"
    />
    <DropDownSelector
      currencies={optionsList}
      parentRefId={parentRefId}
      selectHandler={optionsChangeHandler}
      selectedOption={option}
    />
  </>
);

const DropDownSelector = ({
  currencies,
  parentRefId,
  selectHandler,
  selectedOption,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleIsOpen = () => setOpen(!isOpen);

  const selectCurrencyHandler = e => {
    e.preventDefault();
    selectHandler(e);
    setOpen(false);
  };

  const currencyOptions = currencies.map(c => (
    <Cell
      parentRefId={parentRefId}
      key={c.currency + '-' + parentRefId}
      currency={c.currency}
      clickHandler={selectCurrencyHandler}
    />
  ));

  return (
    <div className={style.selectContainer}>
      <button type="button" onClick={toggleIsOpen} className={style.select}>
        <div
          className={style['icon-currency'] + ' ' + style[selectedOption]}
        ></div>
        <div className={style['down-arrow']}>›</div>
      </button>
      <div
        className={
          style.cellsContainer + ' ' + style[isOpen ? 'open' : 'closed']
        }
      >
        {currencyOptions}
      </div>
    </div>
  );
};

const Cell = ({ parentRefId, currency, clickHandler }) => (
  <button
    type="button"
    className={style.cell + ' ' + style[currency]}
    onClick={clickHandler}
    data-currency={currency}
    data-parentrefid={parentRefId}
    aria-label={`Select: ${currency}`}
  ></button>
);

export default CurrencyExchenger;
