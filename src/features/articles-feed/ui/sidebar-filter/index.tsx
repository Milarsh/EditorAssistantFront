import { type FC } from 'react'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { useRubricsList } from '@/entities/rubric/lib/use-rubrics-list'
import { useSourcesList } from '@/entities/source/lib/use-sources-list'
import { Button } from '@/shared/ui/button'
import { FormBuilder } from '@/shared/ui/form'
import { Sidebar } from '@/shared/ui/sidebar'

interface SidebarFilterProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

type FilterValues = {
  source_id?: number
  date_range?: string
  rubric_id?: number
}

const initialValues: FilterValues = {
  source_id: undefined,
}

const dateOptions = [
  { value: 'today', label: 'Сегодня' },
  { value: '3d', label: 'За 3 дня' },
  { value: '5d', label: 'За 5 дней' },
  { value: '7d', label: 'За неделю' },
  { value: '14d', label: 'За 2 недели' },
]

const buildDateInterval = (
  range?: string,
): { date_from: string; date_to: string } | undefined => {
  if (!range) {
    return undefined
  }

  const now = new Date()
  const from = new Date()

  switch (range) {
    case 'today':
      from.setHours(0, 0, 0, 0)
      break
    case '3d':
      from.setDate(now.getDate() - 3)
      break
    case '5d':
      from.setDate(now.getDate() - 5)
      break
    case '7d':
      from.setDate(now.getDate() - 7)
      break
    case '14d':
      from.setDate(now.getDate() - 14)
      break
    default:
      return undefined
  }

  return {
    date_from: from.toISOString(),
    date_to: now.toISOString(),
  }
}

export const SidebarFilter: FC<SidebarFilterProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { setFilters } = useArticlesFeedStore()

  const handleSubmit = (data: FilterValues) => {
    const dateFilters = buildDateInterval(data.date_range)

    setFilters({
      ...data,
      ...dateFilters,
    })

    setIsOpen(false)
  }

  const { data: sources = [] } = useSourcesList()
  const { data: rubrics = [] } = useRubricsList()

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <div
        className="flex items-center justify-between border-b border-gray-200
          px-5 py-4"
      >
        <h2 className="text-lg font-semibold text-gray-900">Фильтры</h2>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-xl leading-none text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <FormBuilder<FilterValues>
          fields={[
            {
              type: 'radio',
              name: 'source_id',
              title: 'Источник',
              props: {
                options: sources.map((source) => ({
                  value: String(source.id),
                  label: source.name,
                })),
              },
            },
            {
              type: 'radio',
              name: 'date_range',
              title: 'По времени',
              props: {
                options: dateOptions,
              },
            },
            {
              type: 'radio',
              name: 'rubric_id',
              title: 'Источник',
              props: {
                options: rubrics.map((rubric) => ({
                  value: String(rubric.id),
                  label: rubric.title,
                })),
              },
            },
          ]}
          initialValue={initialValues}
          onSubmit={handleSubmit}
          customSubmitComponent={
            <div className="border-t border-gray-200 p-4">
              <Button type="submit" className="bg-blue-500">
                Применить
              </Button>
            </div>
          }
        />
      </div>
    </Sidebar>
  )
}
