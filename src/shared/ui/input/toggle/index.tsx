import type { FC } from 'react'

import { cn } from '@/shared/lib/cn'

interface ToggleSwitchProps {
  checked?: boolean
  onChange?: (value: boolean) => void
  label?: string
  className?: string
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  label,
  className,
}) => {
  return (
    <div className={cn('mb-6 flex items-center', className)}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={cn('relative inline-flex cursor-pointer items-center')}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            onChange?.(!checked)
          }}
          className="peer sr-only"
        />

        <div
          className={cn(
            'h-6 w-11 rounded-full bg-gray-300 transition-all',
            'peer-checked:bg-blue-600 peer-focus:outline-none',
          )}
        />
        <div
          className={cn(
            'absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-all',
            'peer-checked:translate-x-5',
          )}
        />
      </label>
      {label && <span className="ml-3 font-medium text-gray-700">{label}</span>}
    </div>
  )
}
