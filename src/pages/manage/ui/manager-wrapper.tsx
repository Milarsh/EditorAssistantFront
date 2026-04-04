import type { PropsWithChildren, ReactNode } from 'react'

import { Typography } from '@/shared/ui/typography'

type StatItem = {
  label: string
  value: ReactNode
}

interface StatsCardProps {
  title?: string
  items: StatItem[]
}

export const StatsCard = ({ title, items }: StatsCardProps) => {
  return (
    <div
      className="h-fit w-[250px] rounded-lg border border-gray-200 bg-white p-6"
    >
      {title && <Typography variant="h3">{title}</Typography>}

      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item) => (
          <li key={item.label}>
            {item.label}
            <Typography variant="footnote">{item.value}</Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ManagerWrapperProps extends PropsWithChildren {
  topSlot?: ReactNode
  statisticsConfig: {
    title?: string
    items: StatItem[]
  }
  formComponent?: ReactNode
}

export const ManagerWrapper = ({
  children,
  topSlot,
  statisticsConfig,
  formComponent,
}: ManagerWrapperProps) => {
  return (
    <div className="vertical h-screen">
      {topSlot}
      <div className="flex h-screen">
        <div className="vertical gap-20 px-4">
          {statisticsConfig && (
            <StatsCard
              title={statisticsConfig.title}
              items={statisticsConfig.items}
            />
          )}
          {formComponent}
        </div>

        {children}
      </div>
    </div>
  )
}
