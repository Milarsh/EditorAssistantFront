import type { FC, TextareaHTMLAttributes } from 'react'

export const TextareaField: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
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
    className="h-20 w-full resize-none rounded-md border border-slate-300
      bg-white px-3 py-2 text-slate-700 focus:ring-2 focus:ring-slate-500
      focus:outline-none"
  />
)
