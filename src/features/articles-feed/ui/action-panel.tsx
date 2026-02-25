import { Funnel } from 'lucide-react'
import { tv } from 'tailwind-variants'

const controlButton = tv({
  base: 'flex items-center gap-2 px-3 py-1 text-sm transition-colors border-r w-40',
  variants: {
    active: {
      true: 'bg-gray-900 text-white border-gray-900',
      false: 'bg-white border-gray-300 text-gray-700',
    },
  },
})

export const ActionPanel = ({
  onOpenFilter,
  sortAsc,
  onToggleSort,
}: {
  onOpenFilter?: () => void
  sortAsc?: boolean
  onToggleSort?: () => void
}) => (
  <div className="flex flex-wrap justify-between gap-3">
    <div className="flex items-center gap-2 border-y border-gray-300">
      <div
        className="border-x border-gray-300 px-3 py-1 text-sm text-neutral-600
          transition-colors"
      >
        Сортировка:
      </div>
      <button
        type="button"
        onClick={onToggleSort}
        className={controlButton({ active: false })}
      >
        {sortAsc ? 'Сначала старые' : 'Сначала новые'}
      </button>
      <button
        type="button"
        onClick={onOpenFilter}
        className={controlButton({ active: false })}
      >
        <Funnel size={14} /> Фильтры
      </button>
    </div>
  </div>
)
