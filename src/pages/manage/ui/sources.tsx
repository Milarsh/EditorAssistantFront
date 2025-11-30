import { Trash2 as TrashIcon } from 'lucide-react'

import { Header } from '@/shared/ui/header'
import { Typography } from '@/shared/ui/typography'

const MOCK_SOURCES: ListItemProps[] = [
  { name: 'Риа Новости', newsCount: 10 },
  { name: 'Тасс', newsCount: 10 },
  { name: 'Комерсантъ', newsCount: 10 },
  { name: 'Telegram News', newsCount: 10 },
  { name: 'Паблик цитатник', newsCount: 10 },
]

export type ListItemProps = {
  name: string
  newsCount: number
}

const ListItem = ({ newsCount, name }: ListItemProps) => (
  <div className="w-full border border-[#E2E8F0]">
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

type ListProps = {
  listData: ListItemProps[]
  onDelete?: (id: string) => void
}

export const List = ({ listData }: ListProps) => {
  return (
    <div className="vertical w-full gap-4">
      {listData.map((listItem) => (
        <ListItem key={listItem.name} {...listItem} />
      ))}
    </div>
  )
}

export const SourcesManager = () => {
  return (
    <div className="h-screen">
      <Header title="Управление источниками" />

      <div className="h-full bg-[#F8FAFC] p-5">
        <List listData={MOCK_SOURCES} />
      </div>
    </div>
  )
}

export const KeyWordsList = () => {
  return (
    <div className="h-full bg-[#F8FAFC] p-5">
      <List listData={MOCK_SOURCES} />
    </div>
  )
}
