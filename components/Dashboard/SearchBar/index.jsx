import React from 'react';
import style from './style.css';

const SearchBar = () => {
  return (
    <div className={style['search-bar']}>
      <input className={style.input} type="text" placeholder="Find" />
      <button className={style.button} type="button" aria-label="Find button" />
    </div>
  );
};

export default SearchBar;
