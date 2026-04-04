import { RefreshCw } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/shared/ui/button'
import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'

import { handleExportExcel } from './lib/utils'
import { ActionPanel } from './ui/action-panel'
import { ArticlesList } from './ui/articles-list'
import { ArticlesSearch } from './ui/articles-search'
import { SidebarFilter } from './ui/sidebar-filter'

const TABS = [
  { id: 'all', label: 'Все' },
  { id: 'news', label: 'Новостные сайты' },
  { id: 'socialMedia', label: 'Социальные сети' },
]

export const ArticlesFeed = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="w-full overflow-y-auto">
      <div className="vertical w-full gap-6 px-4">
        <div
          className="vertical gap-4 sm:flex-row sm:items-center
            sm:justify-between sm:gap-30"
        >
          <div className="flex flex-row items-center gap-4">
            <Typography variant="h2" className="w-48">
              Лента новостей
            </Typography>
            <ArticlesSearch />
          </div>

          <Button
            size="xs"
            onClick={() => window.location.reload()}
            className="bg-blue-500"
          >
            Обновить
            <RefreshCw className="ml-2 inline-block" />
          </Button>
        </div>
        <div
          className="flex items-center justify-between border-y border-gray-300
            px-2"
        >
          <div>
            <Tabs
              tabs={TABS}
              activeTab={activeTab}
              onChange={(id) => setActiveTab(id)}
            />
          </div>

          <button
            type="button"
            onClick={handleExportExcel}
            className="flex h-5 items-center gap-2 rounded-md bg-blue-500 px-2
              text-sm text-white"
          >
            Экспорт
          </button>
        </div>

        <ActionPanel onOpenFilter={() => setShowFilters(true)} />
        <ArticlesList activeTab={activeTab} />
      </div>
      <SidebarFilter isOpen={showFilters} setIsOpen={setShowFilters} />
    </div>
  )
}
