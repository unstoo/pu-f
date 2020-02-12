/* eslint-disable prettier/prettier */
import React from 'react';
// import Tooltip from 'react-simple-tooltip';
// import Hint from "react-portal-hint";
// import "react-portal-hint/default.css";
import style from './style.css';

// onMouseEnter={toggleVisibility}
// onMouseOut={toggleVisibility}
// onBlur={() => {}}

// eslint-disable-next-line react/prop-types
const TipIcon = ({ hintText }) => {
  // const [visible, setVisibility] = useState(false)
  // const toggleVisibility = () => setVisibility(!visible);
  // const hintClass = visible === true ? 'visible' : 'hidden';
  const text = hintText || 'A placeholder hint text.';

  return (
    <div className={style.hintContainer}>
      <button

      aria-label="Show info."
      type="button"
      className={style.tipIcon + ' ' + style.tip + ' ' + style.hint}><span>{text}</span></button>
      {/* <div className={style.hint + ' ' + style[hintClass]}>{text}</div>
      <div className={style.triangle}></div> */}
      
    </div>
  );
};

export default TipIcon;
