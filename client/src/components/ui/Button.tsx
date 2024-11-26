import { forwardRef } from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  className?: string;
  svg?: React.ReactNode;
  variant?:
    | 'aside'
    | 'like'
    | 'dropdown'
    | 'close'
    | 'submit'
    | 'menu'
    | 'primary'
    | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, svg, variant, onClick, ...props }, ref) => {
    const variantClasses = {
      aside: '',
      like: '',
      dropdown: '',
      close: '',
      submit: '',
      menu: 'text-lg opacity-40 pb-1',
      primary: 'text-base rounded-lg px-14 py-4 border',
      secondary: '',
    };

    return (
      <button
        ref={ref}
        onClick={onClick}
        className={clsx('', variant ? variantClasses[variant] : '', className)}
        {...props}
      >
        {svg}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
