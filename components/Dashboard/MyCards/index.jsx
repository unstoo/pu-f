/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import style from './style.css';
import Button from '../ButtonSquare';

const MyCards = () => (
  <div className={style.cards}>
    <div className={style.headerButtonContainer}>
      <div className={style.headerRow}>
        <h2 className={style.header}>My cards</h2>
        <div className={style.arrow}>›</div>
      </div>
      <Button>+</Button>
    </div>
    <Card />
  </div>
);

// MyCards.propTypes = {
//   children: PropTypes.func,
//   // eslint-disable-next-line react/forbid-prop-types
//   cards: PropTypes.array,
// };

const Card = ({ number = '0000 0000 0000 0000', name = 'John Doe' }) => {
  return (
    <div className={style.card}>
      <div className={style.iconLock}></div>
      <div className={style.iconVisaLogo}></div>
      <div className={style.iconWifi}></div>
      <div className={style.cardDetails}>
        <div>{name}</div>
        <div className={style.cardNumber}>{number}</div>
      </div>
    </div>
  );
};

export default MyCards;
