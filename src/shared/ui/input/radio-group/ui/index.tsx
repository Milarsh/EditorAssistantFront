import { type FC, type ReactNode, useRef, useState } from 'react'

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

  const [isCustom, setIsCustom] = useState(false)

  return (
    <div className={cn('vertical gap-2', containerClass)}>
      {title && <Typography variant="footnote-bold">{title}</Typography>}

      <div className={cn('vertical gap-2', buttonsClass)}>
        {options.map((opt) => (
          <Radio
            key={opt.value}
            checked={!isCustom && value === opt.value}
            onChange={() => {
              setIsCustom(false)
              onChange?.(opt.value)
            }}
            {...opt}
          />
        ))}
        {textField && (
          <div className="col-start-2 flex items-center gap-2">
            <Radio
              value="custom"
              checked={isCustom}
              onChange={() => {
                setIsCustom(true)
                onChange?.('')
                inputRef.current?.focus()
              }}
              label={textField.title}
            />
            <TextField
              value={isCustom ? value : ''}
              ref={inputRef}
              className="h-7 w-15"
              onFocus={() => {
                onChange?.('')
                setIsCustom(true)
              }}
              onChange={(e) => onChange?.(e.target.value)}
            />

            {textField?.afterInputSlot}
          </div>
        )}
      </div>
    </div>
  )
}
