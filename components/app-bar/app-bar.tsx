import React, { ReactNode, useState } from 'react';
import styles from './app-bar.module.scss';

export type AppBarProps = {
  /** App-bar items -  each consists of a label and an action to execute when selected. */
  items: { label: string; action: () => any }[];
  /**  An item to be selected as the default when initilizing the app bar */
  defaultItem?: string;
  /** A custom element (e.g, a logo) */
  children?: ReactNode;
  /** nameClass, style, etc. */
  [x: string]: any;
};

export const AppBar = ({
  items,
  children,
  defaultItem,
  ...rest
}: AppBarProps) => {
  const [selectedItem, setSelectedItem] = useState(
    defaultItem ? defaultItem : items[0].label
  );

  const handleItemClick = (event, callback) => {
    setSelectedItem(event.target.innerText);
    if (callback) callback();
  };

  return (
    <div className={styles.appBar} {...rest}>
      <ul>
        {items.map((item) => (
          <li
            key={Math.random()}
            className={
              selectedItem === item.label ? styles.selected : undefined
            }
            onClick={(e) => handleItemClick(e, item.action)}
          >
            {item.label}
          </li>
        ))}
        {children && <div className={styles.logo}>{children}</div>}
      </ul>
    </div>
  );
};
