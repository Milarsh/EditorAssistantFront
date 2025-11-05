import { FileDown } from 'lucide-react'
import { useMemo, useState } from 'react'

import { MOCK_ARTICLES } from '@/shared/mock/atricle'
import { ArticleCard } from '@/shared/ui/article-card'
import { TextField } from '@/shared/ui/input'
import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'
import { ActionPanel } from '@/widgets/news-feed/ui/action-panel'

const categories = ['all', 'Разработка', 'Дизайн', 'Маркетинг', 'Менеджмент']

export const NewsFeed = ({
  handleOpenFilter,
}: {
  handleOpenFilter: () => void
}) => {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [sortAsc, setSortAsc] = useState(true)

  const filtered = useMemo(() => {
    return MOCK_ARTICLES.filter(
      (a) =>
        category === 'all' ||
        a.description?.includes(category) ||
        a.title.includes(category),
    )
      .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
        sortAsc
          ? (a.published_at ?? '').localeCompare(b.published_at ?? '')
          : (b.published_at ?? '').localeCompare(a.published_at ?? ''),
      )
  }, [category, search, sortAsc])

  return (
    <div className="flex w-full flex-col gap-6 px-4">
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
        sortAsc={sortAsc}
        onToggleSort={() => setSortAsc((s) => !s)}
      />

      <div className="flex flex-col gap-4">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <Typography variant="body">Ничего не найдено</Typography>
        )}
      </div>
    </div>
  )
}
