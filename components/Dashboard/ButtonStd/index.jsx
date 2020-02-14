import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const ButtonWithIcon = ({
  children,
  buttonIcon = '+',
  clickHandler,
  hoverStyleType = 'normal',
}) => {
  const shouldPrintPlus = buttonIcon === '+' ? '+' : '';
  const selectedHoverStyle =
    hoverStyleType === 'normal' ? 'normal' : 'heartBeat';

  const composedStyle = [
    style.customIcon,
    style['icon-button-' + buttonIcon],
  ].join(' ');

  return (
    <button
      onClick={clickHandler}
      type="button"
      className={style['component-style'] + ' ' + style[selectedHoverStyle]}
    >
      <div className={style.buttonRow}>
        <div className={style.buttonLabel}>{children}</div>
        <div className={composedStyle}>{shouldPrintPlus}</div>
      </div>
    </button>
  );
};

ButtonWithIcon.propTypes = {
  children: PropTypes.string,
  buttonIcon: PropTypes.string,
  clickHandler: PropTypes.func,
  hoverStyleType: PropTypes.string,
};

export default ButtonWithIcon;
