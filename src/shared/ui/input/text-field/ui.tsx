import { forwardRef, type InputHTMLAttributes } from 'react'

import { cn } from '@/shared/lib'

export const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, readOnly, name, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      name={name}
      readOnly={readOnly}
      className={cn(
        `w-full rounded-md border border-slate-300 bg-white px-3 py-2
        focus:ring-2 focus:outline-none`,
        {
          [`cursor-not-allowed bg-slate-100 text-slate-500 opacity-75
          select-none`]: readOnly,
        },
        className,
      )}
      {...props}
    />
  )
})

TextField.displayName = 'TextField'
