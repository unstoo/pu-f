/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/prop-types */
import React from 'react';
// import SomeContext from '../SomeContext';
import ButtonStd from '../ButtonStd';
// import PropTypes from 'prop-types';
import style from './style.module.css';

const productsList = [
  {
    title: 'Change plan',
    productLink: '#',
    bgUrl: '/product-change-plan.png',
  },
  {
    title: 'Order a card',
    productLink: '#',
    bgUrl: '/product-order-card.png',
  },
  {
    title: 'Partner program',
    productLink: '#',
    bgUrl: '/product-partner-programm.png',
  },
];

const ProductsList = () => {
  // const { testContext } = React.useContext(SomeContext);
  const products = productsList.map(product => {
    return <Product key={product.title} data={product} />;
  });

  return (
    <div className={style['component-style']}>
      <ul className={style['products-list']}>{products}</ul>
    </div>
  );
};

const Product = ({ data }) => {
  const { title, productLink, bgUrl } = data;

  return (
    <li
      className={style.productItem}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className={style.prodctHeader}>{title}</div>
      <ButtonStd redirect={productLink} hoverStyleType="heartbeat">
        {(data.title === 'Change plan' && 'UPGRADE') || 'READ MORE'}
      </ButtonStd>
    </li>
  );
};

// SearchBar.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   children: PropTypes.any,
// };

export default ProductsList;
