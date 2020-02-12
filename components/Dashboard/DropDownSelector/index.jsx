/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import style from './style.css';

const defaultHandler = e => {
  // eslint-disable-next-line no-alert
  console(
    'please provide selectHandler for DropDownSelector. Event: ' +
      JSON.stringify(e.target),
  );
};

const DropDownSelector = ({
  options,
  parentRefId = 'one',
  selectHandler = defaultHandler,
  selectedOption,
}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleIsOpen = () => setOpen(!isOpen);

  const selectCurrencyHandler = e => {
    e.preventDefault();
    setOpen(false);
    selectHandler(e);
  };

  const openOrClosed = () => (isOpen ? 'open' : 'closed');

  const currencyOptions = options.map(o => (
    <Cell
      parentRefId={parentRefId}
      key={'Cell-' + o.option + '-' + parentRefId}
      option={o.option}
      clickHandler={selectCurrencyHandler}
    />
  ));

  return (
    <div className={style.selectContainer + ' ' + style[openOrClosed()]}>
      <button
        type="button"
        onClick={toggleIsOpen}
        className={style.select + ' ' + style.locale}
      >
        <div className={style[selectedOption]}>{selectedOption}</div>
        <div className={style.arrowDown}>›</div>
      </button>
      <div className={style.cellsContainer + ' ' + style[openOrClosed()]}>
        {currencyOptions}
      </div>
    </div>
  );
};

const Cell = ({ parentRefId, option, clickHandler }) => (
  <button
    type="button"
    className={style.cell + ' ' + style[option]}
    onClick={clickHandler}
    data-option={option}
    data-parentrefid={parentRefId}
    aria-label={`Select: ${option}`}
  >
    {option}
  </button>
);

export default DropDownSelector;
