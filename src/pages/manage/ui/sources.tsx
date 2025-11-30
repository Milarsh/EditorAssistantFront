import { Trash2 as TrashIcon } from 'lucide-react'

import { Header } from '@/shared/ui/header'
import { Typography } from '@/shared/ui/typography'

type SourceListItem = { name: string; newsCount: number }

const MOCK_SOURCES: SourceListItem[] = [
  { name: 'Риа Новости', newsCount: 10 },
  { name: 'Тасс', newsCount: 10 },
  { name: 'Комерсантъ', newsCount: 10 },
  { name: 'Telegram News', newsCount: 10 },
  { name: 'Паблик цитатник', newsCount: 10 },
]

const SourceListItem = ({ newsCount, name }: SourceListItem) => (
  <div className="border border-[#E2E8F0]">
    <div className="flex w-full justify-between bg-white px-6 py-3">
      <Typography variant="body">{name}</Typography>
      <div className="flex gap-10">
        <Typography variant="body" className="text-gray-300">
          {newsCount}
        </Typography>
        <TrashIcon />
      </div>
    </div>
  </div>
)

export const SourcesManager = () => {
  return (
    <div className="h-screen">
      <Header title="Управление источниками" />
      <div className="vertical h-full gap-4 bg-[#F8FAFC] p-5">
        {MOCK_SOURCES.map((source) => (
          <SourceListItem key={source.name} {...source} />
        ))}
      </div>
    </div>
  )
}
