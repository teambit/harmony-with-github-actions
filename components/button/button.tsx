import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';
import cs from 'classnames';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Determines whether button has a primary or secondary type of styling.
   */
  variant: 'primary' | 'secondary';
}

/** 
 *  A simple button component.
*/
export function Button({ children, variant, ...rest }: IButton) {
  return (
    <button className={cs(styles.base, styles[variant])} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
};