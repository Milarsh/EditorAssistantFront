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
    <div className="mb-4 flex gap-2">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'rounded-md bg-slate-200 px-3 py-1 text-sm font-medium transition',
            {
              'bg-slate-800 text-white':
                activeTab === tab.id,
            },
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
