import React from 'react';
import style from './style.css';

const Footer = () => (
  <footer className={style['component-style'] + ' ' + style.footer}>
    <p className={style.paragraph}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris
    </p>
    <div className={style.links}>
      <ul>
        <li>Products</li>
        <li>
          <a href="">Bank transfers</a>
        </li>
        <li>
          <a href="">ATM</a>
        </li>
        <li>
          <a href="">Bank cards</a>
        </li>
      </ul>
      <ul>
        <li>Pricing</li>
        <li>
          <a href="">Personal</a>
        </li>
        <li>
          <a href="">Freelance</a>
        </li>
        <li>
          <a href="">Company</a>
        </li>
      </ul>

      <ul>
        <li>About company</li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
      <ul>
        <ul>
          <li>Documents</li>
          <li>
            <a href="">TOC</a>
          </li>
          <li>
            <a href="">Privacy policy</a>
          </li>
          <li>
            <a href="">AML</a>
          </li>
        </ul>
      </ul>
    </div>
    <ul className={style.help}>
      <li>Help</li>
    </ul>
  </footer>
);

export default Footer;
