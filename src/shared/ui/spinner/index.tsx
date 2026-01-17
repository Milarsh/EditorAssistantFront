import type { FC } from 'react'

import { cn } from '@/shared/lib'

interface Props {
  className?: string
}

export const Spinner: FC<Props> = ({ className }) => {
  const spinnerStyles = cn(
    'size-6 border-gray-300 border-3 rounded-full border-t-tertiary-alt animate-spin',
    className,
  )

  return <div className={spinnerStyles} />
}
