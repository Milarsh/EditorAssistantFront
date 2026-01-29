import { useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { Typography } from '@/shared/ui/typography'

import { ManagerWrapper } from '../manager-wrapper'
//
// const MOCK_SOURCES: SourceListItemProps[] = [
//   { name: 'Риа Новости', newsCount: 1 },
//   { name: 'Тасс', newsCount: 10 },
//   { name: 'Комерсантъ', newsCount: 10 },
//   { name: 'Telegram News', newsCount: 10 },
//   { name: 'Паблик цитатник', newsCount: 10 },
// ]

export const CategoryIdHeader = ({ title }: { title: string }) => {
  const { history } = useRouter()

  return (
    <div
      className="relative flex h-15 items-center justify-start gap-10 px-4 py-2"
    >
      <button
        type="button"
        onClick={() => {
          history.back()
        }}
        className="flex gap-2"
      >
        <ArrowLeft />
        Назад
      </button>
      <Typography variant="h3">{title}</Typography>
    </div>
  )
}

export const KeyWordsCategoryId = () => {
  return (
    <ManagerWrapper
      topSlot={<CategoryIdHeader title="Общие слова про Москву" />}
      statisticsConfig={{
        title: 'Статистика',
        items: [],
      }}
    >
      <div className="w-full bg-[#F8FAFC] p-5">
        {/* <List listData={MOCK_SOURCES} /> */}
      </div>
    </ManagerWrapper>
  )
}
