import type { FC } from 'react'

import { cn } from '@/shared/lib'

interface DateInputProps {
  value?: string
  onChange?: (value: string) => void
  className?: string
}

export const DatePicker: FC<DateInputProps> = ({
  onChange,
  value,
  className,
}) => (
  <input
    value={value}
    type="date"
    className={cn('max-w-30 rounded-xs border border-gray-400 px-2', className)}
    onChange={(e) => onChange?.(e.target.value)}
  />
)
