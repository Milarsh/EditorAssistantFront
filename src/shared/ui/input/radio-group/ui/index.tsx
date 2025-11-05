import { type FC } from 'react'
import { cn } from '@/shared/lib'
import { Radio } from './radio'
import { Typography } from '@/shared/ui/typography'

interface Option {
  label: string
  value: string
}

interface RadioGroupProps {
  value: string
  title?: string
  options: Option[]
  onChange: (value: string) => void
  className?: string
}

export const RadioGroup: FC<RadioGroupProps> = ({
  value,
  title,
  options,
  onChange,
  className,
}) => {
  return (
    <div
      className={cn('vertical gap-2 flex-2rap', className)}
    >
      {title && (
        <Typography variant="footnote-bold">
          {title}
        </Typography>
      )}

      {options.map((opt) => (
        <Radio
          key={opt.value}
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
        />
      ))}
    </div>
  )
}
