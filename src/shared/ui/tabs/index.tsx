import type { FC } from 'react'

import { cn } from '@/shared/lib'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
  tabClassName?: string
  activeTabClassName?: string
  inactiveTabClassName?: string
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  tabClassName,
  activeTabClassName,
  inactiveTabClassName,
}) => {
  const useCustomStyles = Boolean(
    tabClassName ?? activeTabClassName ?? inactiveTabClassName,
  )

  return (
    <div
      className={cn(
        'mb-4 flex w-full',
        useCustomStyles ? 'gap-0' : 'justify-center gap-2',
        className,
      )}
    >
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'px-3 py-2 text-sm font-medium transition',
            useCustomStyles
              ? cn(
                  tabClassName,
                  activeTab === tab.id
                    ? activeTabClassName
                    : inactiveTabClassName,
                )
              : cn(
                  '-mb-px border-b-2',
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-500'
                    : 'border-neutral-300 text-neutral-500 hover:text-blue-400',
                ),
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
