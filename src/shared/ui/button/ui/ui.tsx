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
  size = 's',
  ...props
}) => {
  const buttonStyles = cn(button({ variant, size }), className, {
    'opacity-50': props.disabled,
  })

  const typographyVariant = size === 'xs' ? "button-text-small" : "button-text"

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={buttonStyles} type={type} {...props}>
      <Typography variant={typographyVariant}>
        {children}
      </Typography>
    </button>
  )
}
