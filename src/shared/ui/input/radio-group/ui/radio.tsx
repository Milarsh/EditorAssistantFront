import { type FC, type ReactNode, useId } from 'react'

interface OptionProps {
  label: ReactNode
  value: string
  checked: boolean
  onChange: (value: string) => void
  className?: string
  withTextField?: boolean
  textFieldValue?: string
  onTextFieldChange?: (v: string) => void
}

export const Radio: FC<OptionProps> = ({
  label,
  value,
  checked,
  onChange,
  withTextField = false,
  textFieldValue,
  onTextFieldChange,
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

      {checked && withTextField && (
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="0"
            value={textFieldValue ?? ''}
            onChange={(e) => onTextFieldChange?.(e.target.value)}
            className="max-w-12 rounded-md border border-gray-300 px-2 text-sm
              focus:ring-2 focus:outline-none"
          />
          <span className="text-gray-700">МБ</span>
        </div>
      )}
    </div>
  )
}
