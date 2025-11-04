import { tv as buttonTv } from 'tailwind-variants'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'gradient'
export type ButtonSize = 's' | 'm'

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-content-primary text-primary-alt',
  secondary: 'bg-primary-green-light text-primary-green',
  tertiary: 'bg-content-secondary text-primary-alt',
  gradient: 'bg-gradient-button text-content-primary',
}

export const buttonSize: Record<ButtonSize, string> = {
  m: 'py-5 px-6 rounded-2xl',
  s: 'py-3 px-4 rounded-xl',
}

export const button = buttonTv({
  base: 'whitespace-nowrap',
  variants: {
    variant: buttonVariants,
    size: buttonSize,
  },
  defaultVariants: {
    variant: 'primary',
  },
})
