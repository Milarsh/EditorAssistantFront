import { useState } from 'react'

import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper'

const StatisticList = () => {
  const total = 1247
  const toDelete = 893
  const remaining = total - toDelete

  return (
    <div className="mb-6 text-gray-700">
      <Typography variant="h3" className="mb-2 font-medium">
        Статистика:
      </Typography>
      <ul className="space-y-1">
        <li>
          • Всего новостей:{' '}
          <span className="font-semibold">{total.toLocaleString()}</span>
        </li>
        <li>
          • Будет удалено:{' '}
          <span className="font-semibold">{toDelete.toLocaleString()}</span>
        </li>
        <li>
          • Останется:{' '}
          <span className="font-semibold">{remaining.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  )
}

export const NewsClearSettingsCard = () => {
  const [date, setDate] = useState('')

  const handleDelete = () => {}

  return (
    <SettingsCardWrapper title="Очистка новостей">
      <p className="mb-4 text-gray-700">
        Удалить все новости до указанной даты:
      </p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-6 rounded-md border border-gray-300 px-2 focus:ring-2
          focus:ring-blue-400 focus:outline-none"
      />

      <StatisticList />

      <Button onClick={handleDelete} size="xs" className="mt-4">
        Удалить
      </Button>
    </SettingsCardWrapper>
  )
}
