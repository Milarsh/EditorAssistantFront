import { type FC, type InputHTMLAttributes, useId } from 'react'

interface CheckboxOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
}

export const Checkbox: FC<CheckboxOptionProps> = ({
  label,
  value,
  ...props
}) => {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 text-sm text-gray-600"
    >
      <input
        id={id}
        value={value}
        type="checkbox"
        className="accent-black"
        {...props}
      />
      {label}
    </label>
  )
}
