import { type FC, type InputHTMLAttributes } from 'react'

import { cn } from '@/shared/lib'

export const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  readOnly,
  name,
  ...props
}) => {
  return (
    <input
      type="text"
      name={name}
      disabled={readOnly}
      className={cn(
        `rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700
        focus:ring-2 focus:ring-slate-500 focus:outline-none`,
        className,
      )}
      {...props}
    />
  )
}
