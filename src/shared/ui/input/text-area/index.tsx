import type { FC } from 'react'

interface TextareaFieldProps {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextareaField: FC<TextareaFieldProps> = ({
  name,
  placeholder,
  value,
  onChange,
}) => (
  <textarea
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="h-20 resize-none rounded-md border border-slate-300 bg-white px-3
      py-2 text-slate-700 focus:ring-2 focus:ring-slate-500 focus:outline-none"
  />
)
