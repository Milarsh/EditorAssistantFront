import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, type InputHTMLAttributes, useState } from 'react'

import { cn } from '@/shared/lib'

export const PasswordField = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>
>(({ className, readOnly, name, ...props }, ref) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative w-full">
      <input
        ref={ref}
        type={visible ? 'text' : 'password'}
        name={name}
        readOnly={readOnly}
        className={cn(
          `w-full rounded-md border border-slate-300 bg-white px-3 py-2 pr-10
          focus:ring-2 focus:outline-none`,
          {
            [`cursor-not-allowed bg-slate-100 text-slate-500 opacity-75
            select-none`]: readOnly,
          },
          className,
        )}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        aria-label={visible ? 'Скрыть пароль' : 'Показать пароль'}
        onClick={() => setVisible((v) => !v)}
        className="absolute top-1/2 right-2 -translate-y-1/2 rounded p-1
          text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:ring-2
          focus:ring-blue-500 focus:outline-none"
      >
        {visible ? (
          <EyeOff size={20} strokeWidth={1.5} />
        ) : (
          <Eye size={20} strokeWidth={1.5} />
        )}
      </button>
    </div>
  )
})

PasswordField.displayName = 'PasswordField'
