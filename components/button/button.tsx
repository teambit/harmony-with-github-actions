import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  isLoading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  isLoading,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      className={styles.base}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
  isLoading: false,
};
