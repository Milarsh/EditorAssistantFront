import type { FC, PropsWithChildren } from 'react'

import { cn } from '@/shared/lib'

import { BadgeVariant, variantColorMap } from './config'

interface BadgeProps {
  variant?: BadgeVariant
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  variant = BadgeVariant.Primary,
  children,
}) => {
  const badgeClassNames = cn(
    'rounded-lg flex flex-center p-2 min-w-12',
    variantColorMap[variant],
  )

  return <div className={badgeClassNames}>{children}</div>
}
