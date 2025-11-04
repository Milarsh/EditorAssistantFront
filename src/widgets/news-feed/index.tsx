import { useMemo, useState } from 'react'
import { tv } from 'tailwind-variants'
import { TextField } from '@/shared/ui/input'
import { Tabs } from '@/shared/ui/tabs'

// ---------- Variants ----------

const controlButton = tv({
  base: 'flex items-center gap-2 px-3 py-2 text-sm border rounded-lg transition-colors',
  variants: {
    active: {
      true: 'bg-gray-900 text-white border-gray-900',
      false: 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700',
    },
  },
})

// ---------- Types ----------
interface Article {
  id: number
  title: string
  tag: string
  date: string
}

// ---------- Mock Data ----------
const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Как вырастить личный бренд в 2025 году',
    tag: 'Маркетинг',
    date: '2025-10-28',
  },
  {
    id: 2,
    title: 'Обновление React 19 — что нового',
    tag: 'Разработка',
    date: '2025-10-25',
  },
  {
    id: 3,
    title: '10 способов улучшить продуктивность команды',
    tag: 'Менеджмент',
    date: '2025-10-20',
  },
  {
    id: 4,
    title: 'UI тренды следующего года',
    tag: 'Дизайн',
    date: '2025-10-15',
  },
  {
    id: 5,
    title: 'Как продавать через контент',
    tag: 'Маркетинг',
    date: '2025-10-10',
  },
]

const ActionPanel = ({
  onOpenFilter,
  sortAsc,
  onToggleSort,
}: {
  onOpenFilter: () => void
  sortAsc: boolean
  onToggleSort: () => void
}) => (
  <div className="flex flex-wrap justify-between gap-3">
    <div className="flex gap-2">
      <button
        type="button"
        onClick={onOpenFilter}
        className={controlButton({ active: false })}
      >
        Фильтры
      </button>
      <button
        type="button"
        onClick={onToggleSort}
        className={controlButton({ active: false })}
      >
        {sortAsc ? 'Сначала старые' : 'Сначала новые'}
      </button>
    </div>
  </div>
)

const ArticleCard = ({ article }: { article: Article }) => (
  <div
    className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white
      p-4 transition-shadow hover:shadow-sm"
  >
    <span className="text-xs font-semibold text-blue-600 uppercase">
      {article.tag}
    </span>
    <h3 className="text-lg leading-snug font-semibold text-gray-900">
      {article.title}
    </h3>
    <p className="mt-auto text-sm text-gray-500">
      {new Date(article.date).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })}
    </p>
  </div>
)

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
    return mockArticles
      .filter((a) => category === 'all' || a.tag === category)
      .filter((a) => a.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
        sortAsc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
      )
  }, [category, search, sortAsc])

  return (
    <div className="flex w-full flex-col gap-6 px-4 py-8">
      <div
        className="vertical gap-30 sm:flex-row sm:items-center sm:justify-start"
      >
        <h2 className="text-2xl font-bold">Новости</h2>
        <TextField
          name="search"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // Добавьте класс если надо
          className="w-full rounded-lg border border-gray-300 py-2 pr-3 pl-3
            text-sm focus:ring-2 focus:ring-black focus:outline-none sm:w-72"
        />
      </div>

      {/* Переиспользуем Tabs для категорий */}
      <Tabs
        tabs={categories.map((cat) => ({
          id: cat,
          label: cat === 'all' ? 'Все' : cat,
        }))}
        activeTab={category}
        onChange={setCategory}
      />

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
          <p className="py-8 text-center text-sm text-gray-500">
            Ничего не найдено
          </p>
        )}
      </div>
    </div>
  )
}
