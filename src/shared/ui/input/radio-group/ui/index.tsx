import { type FC, type ReactNode, useRef } from 'react'

import { cn } from '@/shared/lib'
import { TextField } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

import { Radio } from './radio'

interface Option {
  label: string
  value: string
}

interface RadioGroupProps {
  value: string
  title?: string
  options: Option[]
  onChange?: (value: string) => void
  containerClass?: string
  buttonsClass?: string
  textField?: {
    title: string
    afterInputSlot?: ReactNode
  }
}

export const RadioGroup: FC<RadioGroupProps> = ({
  value,
  title,
  options,
  onChange,
  containerClass,
  buttonsClass,
  textField,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const isCustom = !options.some((o) => o.value === value)

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
        {textField && (
          <div className="flex items-center gap-2">
            <Radio
              value="custom"
              checked={isCustom}
              onChange={() => {
                onChange?.('custom')
                inputRef?.current?.focus()
              }}
              label={textField.title}
            />
            <TextField
              value={isCustom ? value : ''}
              className="h-7 w-15"
              ref={inputRef}
              onFocus={() => onChange?.('')}
              onChange={(e) => onChange?.(e.target.value)}
            />
            {textField?.afterInputSlot}
          </div>
        )}
      </div>
    </div>
  )
}
