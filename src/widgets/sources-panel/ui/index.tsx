import { WifiHigh } from 'lucide-react'
import { useState } from 'react'

import { useArticlesList } from '@/entities/articles/lib/use-articles-list'
import { useSourcesList } from '@/entities/source/lib/use-sources-list'
import { SourceCreateForm } from '@/entities/source/ui/source-create-form'
import type { Source } from '@/shared/api'
import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'

import { getSourcesListByType } from '../lib/utils'

const SOURCE_TYPE_LABELS: Record<string, string> = {
  all: 'ВСЕ',
  rss: 'RSS',
  social_media: 'Соцсети',
}

const SourceItem = ({ source }: { source: Source }) => {
  const { data: articles } = useArticlesList({ source_id: source.id })
  const articlesTotal = articles?.pages[0]?.data.total

  return (
    <li
      key={source.id}
      className="flex flex-row items-center gap-2 bg-transparent px-3 py-2
        text-slate-700"
    >
      <WifiHigh size={20} className="-mt-1 rotate-45" />
      {source.name} {articlesTotal && `(${articlesTotal})`}
    </li>
  )
}

export const SourcesPanel = () => {
  const [activeTab, setActiveTab] = useState('all')

  const { data: sources = [] } = useSourcesList()

  const sourcesByType = getSourcesListByType(sources)

  const tabs = sourcesByType
    ? Object.entries(sourcesByType).map(([type, sourcesList]) => ({
        id: type,
        label: SOURCE_TYPE_LABELS[type] ?? type.toUpperCase(),
        items: sourcesList,
      }))
    : []

  const active = tabs.find((t) => t.id === activeTab)

  return (
    <div
      className="vertical h-full w-90 justify-between border-r border-slate-300
        bg-slate-100 p-4"
      style={{ height: 'calc(100vh - calc(var(--spacing) * 12))' }}
    >
      <div>
        <Typography variant="h2" className="mb-2">
          Источники
        </Typography>

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          className="w-full"
          tabClassName="flex-1 bg-blue-600 rounded-lg"
          activeTabClassName="text-white"
          inactiveTabClassName="text-gray-600"
        />
        <ul className="space-y-2">
          {active?.items.map((source) => {
            return <SourceItem key={source.id} source={source} />
          })}
        </ul>
      </div>
      <SourceCreateForm />
    </div>
  )
}
