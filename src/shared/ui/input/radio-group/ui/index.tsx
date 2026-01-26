import { type FC } from 'react'

import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui/typography'

import { Radio } from './radio'

interface Option {
  label: string
  value: string
  withTextField?: boolean
}

interface RadioGroupProps {
  value: string
  title?: string
  options: Option[]
  onChange?: (value: string) => void
  containerClass?: string
  buttonsClass?: string
}

export const RadioGroup: FC<RadioGroupProps> = ({
  value,
  title,
  options,
  onChange,
  containerClass,
  buttonsClass,
}) => {
  return (
    <div className={cn('vertical gap-2', containerClass)}>
      {title && <Typography variant="footnote-bold">{title}</Typography>}

      <div className={cn('vertical gap-2', buttonsClass)}>
        {options.map((opt) => (
          <Radio
            key={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
            {...opt}
          />
        ))}
      </div>
    </div>
  )
}
