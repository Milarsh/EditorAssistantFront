import type { ComponentProps, FC } from 'react'

import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui/typography'

import { button, type ButtonSize, type ButtonVariant } from '../config'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  type = 'button',
  size = 'm',
  ...props
}) => {
  const buttonStyles = cn(button({ variant, size }), className, {
    'opacity-50': props.disabled,
    'relative overflow-hidden': variant === 'gradient',
  })

  const btnTypographyStyles = cn({
    'text-outline-shadow': variant === 'gradient',
  })

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonStyles} type={type} {...props}>
      <Typography variant="button-text" className={btnTypographyStyles}>
        {children}
      </Typography>
      {variant === 'gradient' && (
        <div
          className="bg-primary-green-light absolute bottom-0 left-0 z-0 h-full
            w-full translate-y-[70%] rounded-full blur-[14px]"
        />
      )}
    </button>
  )
}
