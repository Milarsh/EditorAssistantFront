import { FileDown, RefreshCw } from 'lucide-react'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { useArticlesList } from '@/entities/articles/lib/use-articles-list'
import { ArticleCard } from '@/shared/ui/article-card'
import { Button } from '@/shared/ui/button'
import { TextField } from '@/shared/ui/input'
import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'
import { ActionPanel } from '@/widgets/articles-feed/ui/action-panel'

const categories = ['all', 'Разработка', 'Дизайн', 'Маркетинг', 'Менеджмент']

export const NewsFeed = ({
  handleOpenFilter,
}: {
  handleOpenFilter: () => void
}) => {
  const { category, search, order, setCategory, setSearch, toggleOrder } =
    useArticlesFeedStore()

  const { data } = useArticlesList({ order })
  const articles = data?.items || []

  return (
    <div className="vertical w-full gap-6 px-4">
      <div
        className="vertical gap-4 sm:flex-row sm:items-center sm:justify-start
          sm:gap-30"
      >
        <Typography variant="h2">Новости</Typography>
        <TextField
          name="search"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-100"
        />
        <Button size="xs" onClick={() => window.location.reload()}>
          Обновить
          <RefreshCw className="ml-2 inline-block" />
        </Button>
      </div>
      <div className="flex justify-between">
        <Tabs
          tabs={categories.map((cat) => ({
            id: cat,
            label: cat === 'all' ? 'Все' : cat,
          }))}
          activeTab={category}
          onChange={setCategory}
        />
        <a href="/mock-data.xlsx" download>
          <div
            className="bg-btn-primary flex items-center gap-2 rounded-md px-2
              py-1 text-white"
          >
            экспорт Excel <FileDown className="size-5" />
          </div>
        </a>
      </div>

      <ActionPanel
        onOpenFilter={handleOpenFilter}
        sortAsc={false}
        onToggleSort={toggleOrder}
      />

      <div className="flex flex-col gap-4">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <Typography variant="body">Ничего не найдено</Typography>
        )}
      </div>
    </div>
  )
}
