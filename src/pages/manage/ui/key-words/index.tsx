import { Link } from '@tanstack/react-router'

import { useKeyWordsByRubric } from '@/entities/key-words/lib/hooks/use-key-words-by-rubric'
import { useKeyWordsList } from '@/entities/key-words/lib/hooks/use-key-words-list'
import { useRubricCreate } from '@/entities/rubric/lib/use-rubric-create'
import { useRubricDelete } from '@/entities/rubric/lib/use-rubric-delete'
import { useRubricsList } from '@/entities/rubric/lib/use-rubrics-list'
import { ManagerWrapper } from '@/pages/manage/ui/manager-wrapper'
import type {
  Rubric,
  StopCategory,
  StopCategoryUpsertRequest,
} from '@/shared/api'
import { CategoryItem } from '@/shared/ui/category-item'
import { FormBuilder } from '@/shared/ui/form'
import { Header } from '@/shared/ui/header'
import { List } from '@/shared/ui/list'

const CreateRubricForm = () => {
  const { mutateAsync: createRubric, normalizedError } = useRubricCreate()

  return (
    <FormBuilder<StopCategoryUpsertRequest>
      formTitle="Добавить рубрику"
      submitText="Добавить"
      formError={normalizedError}
      fields={[
        {
          type: 'text',
          name: 'title',
          props: { placeholder: 'Название рубрики' },
        },
      ]}
      initialValue={{ title: '' }}
      onSubmit={createRubric}
    />
  )
}

const CategoryItemContainer = ({ rubric }: { rubric: Rubric }) => {
  const { mutate: deleteCategory, normalizedError } = useRubricDelete()

  const categoryStopWords = useKeyWordsByRubric(rubric.id)

  const wordsPreview = categoryStopWords.map((w) => w.value).join(', ')

  return (
    <Link
      to="/manage/key-words/$category-id"
      params={{ 'category-id': String(rubric.id) }}
    >
      <CategoryItem
        title={rubric.title}
        wordsCount={categoryStopWords.length}
        wordsPreview={wordsPreview}
        onDelete={() => deleteCategory(rubric.id)}
        error={normalizedError?.message}
      />
    </Link>
  )
}

export const KeyWordsManager = () => {
  const { data: rubrics = [] } = useRubricsList()
  const { data: keyWords = [] } = useKeyWordsList()

  return (
    <ManagerWrapper
      statisticsConfig={{
        title: 'Статистика',
        items: [
          { label: 'Категорий ключевых слов: ', value: rubrics?.length },
          { label: 'Всего ключевых слов: ', value: keyWords?.length },
        ],
      }}
      formComponent={<CreateRubricForm />}
      topSlot={<Header title="Рубрики" />}
    >
      <div className="w-full pr-4">
        {rubrics?.length > 0 && (
          <List<StopCategory>
            items={rubrics}
            renderItem={(rubric) => (
              <CategoryItemContainer key={rubric.id} rubric={rubric} />
            )}
          />
        )}
      </div>
    </ManagerWrapper>
  )
}
