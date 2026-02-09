import { type FC, type ReactNode, useId } from 'react'

interface OptionProps {
  label: ReactNode
  value: string
  checked: boolean
  onChange: (value: string) => void
  className?: string
}

export const Radio: FC<OptionProps> = ({
  label,
  value,
  checked,
  onChange,
  ...props
}) => {
  const id = useId()

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
      >
        <input
          id={id}
          type="radio"
          className="accent-black"
          checked={checked}
          onChange={() => onChange(value)}
          {...props}
        />
        {label}
      </label>
    </div>
  )
}
