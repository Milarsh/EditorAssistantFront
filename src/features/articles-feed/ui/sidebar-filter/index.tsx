import { type FC } from 'react'

import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import type { ArticlesListParams } from '@/entities/articles/model'
import { useRubricsList } from '@/entities/rubric/lib/use-rubrics-list'
import { useSourcesList } from '@/entities/source/lib/use-sources-list'
import {
  ArticlesListParamsStopWordsEnum,
  ArticlesListParamsTrendEnum,
} from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { FormBuilder } from '@/shared/ui/form'
import { Sidebar } from '@/shared/ui/sidebar'

import {
  buildDateInterval,
  type DateRange,
  resolveDateRange,
} from '../../lib/utils'
import { dateOptions } from './config'

interface SidebarFilterProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

type FilterValues = {
  date_range?: DateRange
} & ArticlesListParams

const getInitValues = ({
  date_from,
  date_to,
  rubric_id,
  source_id,
  trend,
  stop_words,
}: ArticlesListParams): FilterValues => ({
  source_id,
  rubric_id,
  date_range: resolveDateRange(date_from, date_to),
  stop_words,
  trend,
})

export const SidebarFilter: FC<SidebarFilterProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { setFilters, reset, filters } = useArticlesFeedStore()

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

  const initialValues = getInitValues(filters)

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
          resetAfterSubmit={false}
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
              title: 'Рубрика',
              props: {
                options: rubrics.map((rubric) => ({
                  value: String(rubric.id),
                  label: rubric.title,
                })),
              },
            },
            {
              type: 'radio',
              name: 'trend',
              title: 'По трендам',
              props: {
                options: [
                  {
                    value: ArticlesListParamsTrendEnum.Only,
                    label: 'Только новости в тренде',
                  },
                  {
                    value: ArticlesListParamsTrendEnum.Exclude,
                    label: 'Только новости не в тренде',
                  },
                ],
              },
            },
            {
              type: 'radio',
              name: 'stop_words',
              title: 'По стоп-словам',
              props: {
                options: [
                  {
                    value: ArticlesListParamsStopWordsEnum.With,
                    label: 'Только новости со стоп-словами',
                  },
                  {
                    value: ArticlesListParamsStopWordsEnum.Without,
                    label: 'Только новости без стоп-слов',
                  },
                ],
              },
            },
          ]}
          initialValue={initialValues}
          onSubmit={handleSubmit}
          customSubmitComponent={
            <div
              className="flex flex-row items-center justify-center gap-2
                border-t border-gray-200 p-2"
            >
              <Button type="submit" size="xs" className="bg-blue-500">
                Применить фильтры
              </Button>
              <Button onClick={reset} size="xs" className="bg-blue-500">
                Сбросить фильтры
              </Button>
            </div>
          }
        />
      </div>
    </Sidebar>
  )
}
