import { useMemo, useState } from 'react'

import { useArticlesCleanup } from '@/entities/articles/lib/use-articles-cleanup'
import type {
  ArticleCleanupRequest,
  ArticleCleanupResponse,
} from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { FormBuilder } from '@/shared/ui/form'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper'

type StatisticListProps = {
  total: string | number
  remaining: string | number
  deleted: string | number
}

const StatisticList = ({ total, remaining, deleted }: StatisticListProps) => {
  return (
    <div className="mb-6 text-gray-700">
      <Typography variant="h3" className="mb-2 font-medium">
        Статистика:
      </Typography>
      <ul className="space-y-1">
        <li>
          • Всего новостей: <span className="font-semibold">{total}</span>
        </li>
        <li>
          • Будет удалено: <span className="font-semibold">{deleted}</span>
        </li>
        <li>
          • Останется: <span className="font-semibold">{remaining}</span>
        </li>
      </ul>
    </div>
  )
}

export const NewsClearSettingsCard = () => {
  const { mutateAsync, normalizedError } = useArticlesCleanup()
  const [statistics, setStatistics] = useState<ArticleCleanupResponse | null>(
    null,
  )
  const onValueChange = async (value: string) => {
    const { data } = await mutateAsync({ date_to: value, dry_run: true })

    setStatistics(data)
  }

  const initialValues: ArticleCleanupRequest = useMemo(
    () => ({
      dry_run: false,
      date_to: '',
    }),
    [],
  )

  return (
    <SettingsCardWrapper title="Очистка новостей">
      <FormBuilder<ArticleCleanupRequest>
        formError={normalizedError}
        formTitle="Удалить все новости до указанной даты:"
        fields={[
          {
            type: 'date',
            name: 'date_to',
            onValueChange,
            props: {},
          },
        ]}
        initialValue={initialValues}
        onSubmit={(data) => mutateAsync(data)}
        submitText="Удалить"
        customSubmitComponent={
          <div className="vertical">
            <StatisticList
              total={statistics?.total ?? '-'}
              remaining={statistics?.remaining ?? '-'}
              deleted={statistics?.deleted ?? '-'}
            />
            <Button
              type="submit"
              className="flex h-8 w-30 items-center justify-center bg-blue-500"
            >
              Удалить
            </Button>
          </div>
        }
      />
    </SettingsCardWrapper>
  )
}
