import { FileDown, RefreshCw } from 'lucide-react'
import { useState } from 'react'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { useArticlesList } from '@/entities/articles/lib/use-articles-list'
import { ArticlesListParamsOrderEnum } from '@/shared/api'
import { ArticleCard } from '@/shared/ui/article-card'
import { Button } from '@/shared/ui/button'
import { TextField } from '@/shared/ui/input'
import { Loader } from '@/shared/ui/loader'
import { Typography } from '@/shared/ui/typography'

import { useIntersectionObserver } from './lib/hooks/use-intersection'
import { handleExportExcel } from './lib/utils'
import { ActionPanel } from './ui/action-panel'
import { SidebarFilter } from './ui/sidebar-filter'

export const NewsFeed = () => {
  const { filters, setFilters } = useArticlesFeedStore()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useArticlesList(filters)

  const observerRef = useIntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    },
    { rootMargin: '0px 0px 400px 0px' },
  )

  const articles = data?.pages.flatMap((page) => page.data.items) ?? []

  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <div className="vertical w-full gap-6 px-4">
        <div
          className="vertical gap-4 sm:flex-row sm:items-center sm:justify-start
            sm:gap-30"
        >
          <Typography variant="h2">Новости</Typography>
          <TextField
            name="search"
            placeholder="Поиск..."
            value={filters.q}
            // onChange={(e) => console.log(e.target.value)}
            className="w-full max-w-100"
          />
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
        <div className="vertical gap-4">
          {articles.map((article, index) => {
            const shouldAttachRef =
              articles.length > 1 && index === articles.length - 2

            return (
              <div
                key={article.id}
                ref={shouldAttachRef ? observerRef : undefined}
              >
                <ArticleCard article={article} />
              </div>
            )
          })}

          {isFetchingNextPage && <Loader />}
        </div>
      </div>
      <SidebarFilter isOpen={showFilters} setIsOpen={setShowFilters} />
    </>
  )
}
