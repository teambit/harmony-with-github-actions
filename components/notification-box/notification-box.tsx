import React from 'react';
import cs from 'classnames'
import styles from './notification-box.module.scss'
import { Button } from '@teambit/harmony-with-github-actions.react-ui.button'

export type NotificationBoxProps = {
    /** The notification box content. */
    children: any,
    /** A className for customization */
    className?: string;
    /** Determines whether to style the notification box as "floating"  */
    floatEffect?: boolean
}

export const NotificationBox = ({className, children, floatEffect = true} : NotificationBoxProps) => {
    return(
     <div className={cs(styles.container, floatEffect ? styles.float : null, className)}>
        {children}
        <div>
            <Button variant='secondary'>close</Button>
        </div>
     </div>   
    )
}