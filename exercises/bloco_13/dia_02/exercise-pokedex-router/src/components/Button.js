import React from 'react';

import styles from './Button.module.css';

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${styles[className]}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
