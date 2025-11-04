import { useState } from 'react'

import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'
import { SourceForm } from './source-form'

const MOCK_TABS = [
  {
    id: 'projects',
    label: 'Все',
    items: ['Исправить баги', 'Добавить фильтр', 'Тестирование API'],
  },
  {
    id: 'tasks',
    label: 'RSS',
    items: ['Риа Новости', 'ТАСС', 'Коммерсанть'],
  },
  {
    id: 'notes',
    label: 'Cоцсети',
    items: ['Созвон в пятницу', 'Демо для клиента', 'Проверить аналитику'],
  },
]

export const LeftSidePanel = () => {
  const [activeTab, setActiveTab] = useState('projects')

  const active = MOCK_TABS.find((t) => t.id === activeTab)

  return (
    <div
      className="flex h-screen min-w-90 flex-col justify-between border-r
        border-slate-300 bg-slate-100 p-4"
    >
      <div>
        <Typography variant="h2" className="mb-2">
          Источники
        </Typography>

        <Tabs tabs={MOCK_TABS} activeTab={activeTab} onChange={setActiveTab} />
        <ul className="space-y-2">
          {active?.items.map((item) => (
            <li key={item} className="bg-transparent px-3 py-2 text-slate-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <SourceForm />
    </div>
  )
}
