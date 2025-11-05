import type { FC } from 'react'

import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui/typography'

import { Checkbox } from './checkbox'

interface Option {
  label: string
  value: string
}

interface CheckboxGroupProps {
  name?: string
  value: string[]
  options: Option[]
  title?: string
  onChange: (selected: string[]) => void
  className?: string
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  name,
  value,
  title,
  options,
  onChange,
  className,
}) => {
  const handleChange = (val: string, checked: boolean) => {
    onChange(checked ? [...value, val] : value.filter((v) => v !== val))
  }
  return (
    <div className={cn('vertical gap-2', className)}>
      {title && <Typography variant="footnote-bold">{title}</Typography>}
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          name={name}
          label={opt.label}
          value={opt.value}
          checked={value.includes(opt.value)}
          onChange={(e) => handleChange(opt.value, e.target.checked)}
        />
      ))}
    </div>
  )
}
