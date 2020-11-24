import React from 'react';
import cs from 'classnames'
import styles from './notification-box.module.scss'
import {Button} from '@eden/harmony-with-github-actions.new-comps.button'

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
            <Button variant='secondary'>Okay</Button>
        </div>
     </div>   
    )
}