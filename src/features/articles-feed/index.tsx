import { FileUp, RefreshCw } from 'lucide-react'
import { useState } from 'react'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { ArticlesListParamsOrderEnum } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

import { handleExportExcel } from './lib/utils'
import { ActionPanel } from './ui/action-panel'
import { ArticlesList } from './ui/articles-list'
import { ArticlesSearch } from './ui/articles-search'
import { SidebarFilter } from './ui/sidebar-filter'

export const ArticlesFeed = () => {
  const { filters, setFilters } = useArticlesFeedStore()

  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
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
        <div className="flex justify-end border-y border-gray-300 p-2">
          <button
            type="button"
            onClick={handleExportExcel}
            className="flex items-center gap-2 rounded-md bg-blue-500 px-2
              text-sm text-white"
          >
            экспорт Excel <FileUp size={16} />
          </button>
        </div>

        <ActionPanel
          onOpenFilter={() => setShowFilters(true)}
          sortAsc={filters.order === ArticlesListParamsOrderEnum.Asc}
          onToggleSort={() =>
            setFilters({
              order:
                filters.order === ArticlesListParamsOrderEnum.Asc
                  ? ArticlesListParamsOrderEnum.Desc
                  : ArticlesListParamsOrderEnum.Asc,
            })
          }
        />
        <ArticlesList />
      </div>
      <SidebarFilter isOpen={showFilters} setIsOpen={setShowFilters} />
    </>
  )
}
