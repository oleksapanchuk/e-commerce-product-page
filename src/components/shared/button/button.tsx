import React, { type ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';
import { cn } from '../../../utils/cn.ts';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    iconStart?: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
}

const Button = ({
    children,
    iconStart,
    variant = 'primary',
    className,
    ...props
}: ButtonProps) => {
    const buttonClasses = cn(
        styles.buttonContainer,
        styles[`buttonContainer--${variant}`],
        className
    );

    return (
        <button className={buttonClasses} {...props}>
            {iconStart && iconStart}
            {children}
        </button>
    );
};

export default Button;
