import { List, type ListItemProps } from '@/pages/manage'

import { CategoryIdHeader } from '../key-words/category-id'
import { ManagerWrapper } from '../manager-wrapper'

const MOCK_SOURCES: ListItemProps[] = [
  { name: 'Риа Новости', newsCount: 10 },
  { name: 'Тасс', newsCount: 10 },
  { name: 'Комерсантъ', newsCount: 10 },
  { name: 'Telegram News', newsCount: 10 },
  { name: 'Паблик цитатник', newsCount: 10 },
]

export const StopWordsCategoryId = () => {
  return (
    <ManagerWrapper
      topSlot={<CategoryIdHeader title="Коммерция / объявления" />}
      categories={[]}
      newCategory=""
      setNewCategory={() => {}}
      handleAdd={undefined}
    >
      <div className="w-full bg-[#F8FAFC] p-5">
        <List listData={MOCK_SOURCES} />
      </div>
    </ManagerWrapper>
  )
}
