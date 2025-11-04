import { tv } from 'tailwind-variants'

const controlButton = tv({
  base: 'flex items-center gap-2 px-3 py-2 text-sm border rounded-lg transition-colors',
  variants: {
    active: {
      true: 'bg-gray-900 text-white border-gray-900',
      false: 'bg-white hover:bg-gray-100 border-gray-300 text-gray-700',
    },
  },
})


export const ActionPanel = ({
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
