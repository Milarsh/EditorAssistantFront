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
}

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="mb-4 flex w-full justify-center gap-2">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            '-mb-px border-b-2 px-3 py-2 text-sm font-medium transition',
            activeTab === tab.id
              ? 'border-blue-500 text-blue-500'
              : 'border-neutral-300 text-neutral-500 hover:text-blue-400',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
