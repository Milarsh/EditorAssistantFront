import { useParams, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Trash2 } from 'lucide-react'

import { useKeyWordCreate } from '@/entities/key-words/lib/hooks/use-key-word-create'
import { useKeyWordDelete } from '@/entities/key-words/lib/hooks/use-key-word-delete'
import { useKeyWordsByRubric } from '@/entities/key-words/lib/hooks/use-key-words-by-rubric'
import { useRubricsList } from '@/entities/rubric/lib/use-rubrics-list'
import type { KeyWord, KeyWordUpsertRequest } from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'
import { List } from '@/shared/ui/list'
import { Typography } from '@/shared/ui/typography'

import { ManagerWrapper } from '../manager-wrapper'

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

const WordsListItem = ({ keyWord }: { keyWord: KeyWord }) => {
  const { mutateAsync: deleteWord } = useKeyWordDelete()

  return (
    <div
      className="flex items-start justify-between rounded-md border
        border-gray-200 bg-white p-4"
    >
      {keyWord.value}
      <Trash2
        className="cursor-pointer"
        onClick={() => deleteWord(keyWord.id)}
      />
    </div>
  )
}

const CreateKeyWordForm = ({ rubricId }: { rubricId: number }) => {
  const {
    mutateAsync: createWord,
    normalizedError: createWordNormalizedError,
  } = useKeyWordCreate()

  return (
    <FormBuilder<KeyWordUpsertRequest>
      formTitle="Добавить ключевое-слово"
      submitText="Добавить"
      formError={createWordNormalizedError}
      fields={[
        {
          type: 'text',
          name: 'value',
          props: { placeholder: 'Ключевое слово' },
        },
      ]}
      initialValue={{ value: '', rubric_id: Number(rubricId) }}
      onSubmit={createWord}
    />
  )
}

export const KeyWordsCategoryId = () => {
  const { 'category-id': rubricId } = useParams({
    from: '/_auth/manage/key-words/$category-id',
  })
  const { data: rubrics = [] } = useRubricsList()
  const keyWordsByCategory = useKeyWordsByRubric(Number(rubricId))

  return (
    <ManagerWrapper
      topSlot={<CategoryIdHeader title="Общие слова про Москву" />}
      statisticsConfig={{
        title: 'Статистика',
        items: [],
      }}
      formComponent={<CreateKeyWordForm rubricId={Number(rubricId)} />}
    >
      <div className="w-full bg-[#F8FAFC] p-5">
        {rubrics?.length > 0 && (
          <List<KeyWord>
            items={keyWordsByCategory}
            renderItem={(keyWord) => <WordsListItem keyWord={keyWord} />}
          />
        )}
      </div>
    </ManagerWrapper>
  )
}
