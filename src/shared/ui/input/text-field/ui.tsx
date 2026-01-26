import { type FC, type InputHTMLAttributes } from 'react'

import { cn } from '@/shared/lib'

export const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  readOnly,
  name,
  ...props
}) => {
  const styleClass = cn(
    `rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-700 w-full
 focus:ring-2 focus:outline-none`,
    {
      'cursor-not-allowed bg-slate-100 text-slate-500 opacity-75 select-none':
        readOnly,
    },
    className,
  )

  return (
    <input
      type="text"
      name={name}
      readOnly={readOnly}
      className={styleClass}
      {...props}
    />
  )
}
