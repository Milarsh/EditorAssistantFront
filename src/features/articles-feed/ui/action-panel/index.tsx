import { Funnel } from 'lucide-react'
import { tv } from 'tailwind-variants'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import type { ArticlesListParams } from '@/entities/articles/model'
import {
  ArticlesListParamsOrderEnum,
  ArticlesListParamsRelevanceEnum,
} from '@/shared/api'

import { handleChangeFilters } from './lib/utils'
import type { SortOption } from './model'

const controlButton = tv({
  base: 'flex items-center gap-2 px-3 py-1 text-sm transition-colors border-r w-40',
  variants: {
    active: {
      true: 'bg-gray-900 text-white border-gray-900',
      false: 'bg-white border-gray-300 text-gray-700',
    },
  },
})

const selectOptions: { label: string; value: SortOption }[] = [
  { label: 'Сначала новые', value: 'newest' },
  { label: 'Сначала старые', value: 'oldest' },
  { label: 'Сначала релевантные', value: 'relevant' },
  { label: 'Сначала не релевантные', value: 'notRelevant' },
]

const getCurrentValue = (filters: ArticlesListParams): SortOption => {
  if (filters.relevance === ArticlesListParamsRelevanceEnum.Desc) {
    return 'relevant'
  }

  if (filters.relevance === ArticlesListParamsRelevanceEnum.Asc) {
    return 'notRelevant'
  }

  if (filters.order === ArticlesListParamsOrderEnum.Asc) {
    return 'oldest'
  }

  return 'newest'
}

export const ActionPanel = ({
  onOpenFilter,
}: {
  onOpenFilter?: () => void
}) => {
  const { filters } = useArticlesFeedStore()

  const currentValue = getCurrentValue(filters)

  return (
    <div className="flex flex-wrap justify-between gap-3">
      <div className="flex items-center gap-2 border-y border-gray-300">
        <div
          className="border-x border-gray-300 px-3 py-1 text-sm
            text-neutral-600"
        >
          Сортировка:
        </div>

        <select
          value={currentValue}
          onChange={(e) => handleChangeFilters(e.target.value as SortOption)}
          className="cursor-pointer border-r border-gray-300 bg-white px-3 py-1
            text-sm text-gray-700 focus:outline-none"
        >
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

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
}
