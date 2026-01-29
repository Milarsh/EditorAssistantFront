import { ManagerWrapper } from '@/pages/manage/ui/manager-wrapper'
import { Header } from '@/shared/ui/header'

export const KeyWordsManager = () => {
  return (
    <ManagerWrapper
      statisticsConfig={{
        title: 'Статистика',
        items: [],
      }}
      topSlot={<Header title="Категории ключевых слов" />}
    >
      {/* <WordsList */}
      {/*  title="key-words" */}
      {/*  categories={categories} */}
      {/*  handleDelete={handleDelete} */}
      {/* /> */}
    </ManagerWrapper>
  )
}
