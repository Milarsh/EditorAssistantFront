import { useParams, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Trash2 } from 'lucide-react'

import { useStopWordCreate, useStopWordDelete } from '@/entities/stop-words'
import { useStopWordsByCategory } from '@/entities/stop-words/lib/hooks/use-stop-words-by-category'
import { useStopCategoriesList } from '@/entities/stop-words-categories/'
import { useStopCategorySingle } from '@/entities/stop-words-categories/lib/hooks/use-stop-category-single'
import { ManagerWrapper } from '@/pages/manage/ui/manager-wrapper'
import type { StopWord, StopWordUpsertRequest } from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'
import { List } from '@/shared/ui/list'
import { Typography } from '@/shared/ui/typography'

interface CategoryIdProps {
  categoryId: string
}

const CreateStopWordForm = ({ categoryId }: CategoryIdProps) => {
  const {
    mutateAsync: createWord,
    normalizedError: createWordNormalizedError,
  } = useStopWordCreate()

  return (
    <FormBuilder<StopWordUpsertRequest>
      formTitle="Добавить стоп-слово"
      submitText="Добавить"
      formError={createWordNormalizedError}
      fields={[
        {
          type: 'text',
          name: 'value',
          props: { placeholder: 'Стоп слово' },
        },
      ]}
      initialValue={{ value: '', category_id: Number(categoryId) }}
      onSubmit={createWord}
    />
  )
}

const Top = ({ categoryId }: CategoryIdProps) => {
  const { category } = useStopCategorySingle(Number(categoryId))
  const { history } = useRouter()

  return (
    <div className="relative flex h-15 items-center gap-4 px-4 py-2">
      <button
        type="button"
        className="flex items-center"
        onClick={() => history.back()}
      >
        <ArrowLeft />
        <Typography variant="body">Назад</Typography>
      </button>
      <Typography variant="h2">{category?.title}</Typography>
    </div>
  )
}

const StopWordListRenderer = ({ categoryId }: CategoryIdProps) => {
  const stopWordsByCategory = useStopWordsByCategory(Number(categoryId))

  const { mutateAsync: deleteStopWord } = useStopWordDelete()

  return (
    <List<StopWord>
      items={stopWordsByCategory}
      renderItem={(stopWord) => (
        <div
          className="flex items-start justify-between rounded-md border
            border-gray-200 bg-white p-4"
        >
          {stopWord.value}
          <Trash2
            className="cursor-pointer"
            onClick={() => deleteStopWord(stopWord.id)}
          />
        </div>
      )}
    />
  )
}

export const StopWordsCategoryId = () => {
  const { 'category-id': categoryId } = useParams({
    from: '/_auth/manage/stop-words/$category-id',
  })

  const { data: stopCategories = [] } = useStopCategoriesList()
  const stopWordsByCategory = useStopWordsByCategory(Number(categoryId))

  return (
    <ManagerWrapper
      topSlot={<Top categoryId={categoryId} />}
      formComponent={<CreateStopWordForm categoryId={categoryId} />}
      statisticsConfig={{
        title: 'Статистика',
        items: [
          {
            label: 'Всего стоп-слов: ',
            value: stopWordsByCategory.length,
          },
        ],
      }}
    >
      <div className="w-full pr-4">
        {stopCategories?.length > 0 && (
          <StopWordListRenderer categoryId={categoryId} />
        )}
      </div>
    </ManagerWrapper>
  )
}
