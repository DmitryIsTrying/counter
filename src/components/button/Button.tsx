import React, {ButtonHTMLAttributes} from 'react';
import styles from './button.module.css'

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, ...props}: ButtonPropsType) => {
    return (
        <button className={styles.btn} {...props}>{children}</button>
    );
};