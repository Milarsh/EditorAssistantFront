import {ChevronDown} from 'lucide-react'
import { type FC, type SelectHTMLAttributes } from 'react'

import { cn } from '@/shared/lib'


interface Option {
  label: string
  value: string | number
}

interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: Option[]
  readOnly?: boolean
}

export const SelectField: FC<SelectFieldProps> = ({
  className,
  name,
  value,
  options,
  readOnly,
  disabled,
  ...props
}) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        disabled={readOnly || disabled}
        className={cn(
          `w-full appearance-none rounded-md border border-slate-300 bg-white
          px-3 py-2 pr-8 text-slate-700 focus:ring-2 focus:ring-slate-500
          focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
          className,
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <ChevronDown/>
    </div>
  )
}
