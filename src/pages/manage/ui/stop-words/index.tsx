import { Link } from '@tanstack/react-router'

import { useStopWordsByCategory, useStopWordsList } from '@/entities/stop-words'
import {
  useStopCategoriesCreate,
  useStopCategoriesList,
  useStopCategoryDelete,
} from '@/entities/stop-words-categories/'
import { ManagerWrapper } from '@/pages/manage/ui/manager-wrapper'
import type { StopCategory, StopCategoryUpsertRequest } from '@/shared/api'
import { CategoryItem } from '@/shared/ui/category-item'
import { FormBuilder } from '@/shared/ui/form'
import { Header } from '@/shared/ui/header'
import { List } from '@/shared/ui/list'

const CreateCategoryForm = () => {
  const {
    mutateAsync: createCategory,
    normalizedError: createCategoryNormalizedError,
  } = useStopCategoriesCreate()

  return (
    <FormBuilder<StopCategoryUpsertRequest>
      formTitle="Добавить категорию"
      submitText="Добавить"
      formError={createCategoryNormalizedError}
      fields={[
        {
          type: 'text',
          name: 'title',
          props: { placeholder: 'Название категории' },
        },
      ]}
      initialValue={{ title: '' }}
      onSubmit={createCategory}
    />
  )
}

const CategoryItemContainer = ({ category }: { category: StopCategory }) => {
  const { mutate: deleteCategory, normalizedError } = useStopCategoryDelete()

  const categoryStopWords = useStopWordsByCategory(category.id)

  const wordsPreview = categoryStopWords.map((w) => w.value).join(', ')

  return (
    <Link
      to="/manage/stop-words/$category-id"
      params={{ 'category-id': String(category.id) }}
    >
      <CategoryItem
        title={category.title}
        wordsCount={categoryStopWords.length}
        wordsPreview={wordsPreview}
        onDelete={() => deleteCategory(category.id)}
        error={normalizedError?.message}
      />
    </Link>
  )
}

export const StopCategoriesManager = () => {
  const { data: stopCategories = [] } = useStopCategoriesList()
  const { data: stopWords = [] } = useStopWordsList()

  return (
    <ManagerWrapper
      topSlot={<Header title="Категории стоп-слов" />}
      formComponent={<CreateCategoryForm />}
      statisticsConfig={{
        title: 'Статистика',
        items: [
          { label: 'Категорий стоп слов: ', value: stopCategories?.length },
          { label: 'Всего стоп слов: ', value: stopWords.length },
        ],
      }}
    >
      <div className="w-full pr-4">
        {stopCategories?.length > 0 && (
          <List<StopCategory>
            items={stopCategories}
            renderItem={(category) => (
              <CategoryItemContainer key={category.id} category={category} />
            )}
          />
        )}
      </div>
    </ManagerWrapper>
  )
}
