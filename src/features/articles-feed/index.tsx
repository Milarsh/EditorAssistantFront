import { FileDown, RefreshCw } from 'lucide-react'
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
    <div className="w-full overflow-y-auto">
      <div className="vertical w-full gap-6 px-4">
        <div
          className="vertical gap-4 sm:flex-row sm:items-center sm:justify-start
            sm:gap-30"
        >
          <Typography variant="h2">Новости</Typography>
          <ArticlesSearch />
          <Button size="xs" onClick={() => window.location.reload()}>
            Обновить
            <RefreshCw className="ml-2 inline-block" />
          </Button>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleExportExcel}
            className="bg-btn-primary flex items-center gap-2 rounded-md px-2
              py-1 text-white"
          >
            экспорт Excel <FileDown className="size-5" />
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
    </div>
  )
}
