import { Link } from '@tanstack/react-router'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import { ManagerWrapper } from '@/pages/manage/ui/manager-wrapper'
import { Header } from '@/shared/ui/header'
import { TextField } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

const MOCK_WORDS_CATEGORY = [
  {
    id: 1,
    name: 'Коммерция / объявления',
    count: 23,
    words:
      'куплю, продам, аренда, вакансии, реклама, работа, трудоустройство, акция, скидка, промокод, оффер',
    linkTo: '/manage/stop-words/$category-id',
  },
  {
    id: 2,
    name: 'Слова соцсетей',
    count: 14,
    words: 'лайк, подписка, репост, комментарий, блогер, видео, стрим',
    linkTo: '/manage/stop-words/$category-id',
  },
  {
    id: 3,
    name: 'Финансы / бизнес',
    count: 17,
    words:
      'биржа, акции, курс, брокер, инвестиции, фондовый рынок, Московская биржа',
    linkTo: '/manage/stop-words/$category-id',
  },
  {
    id: 4,
    name: 'Транспорт / трафик',
    count: 12,
    words: 'пробки, трафик, ДТП, маршрут, метро',
    linkTo: '/manage/stop-words/$category-id',
  },
]

const CategoryItem = ({
  category,
  onDelete,
}: {
  category: any
  onDelete?: any
}) => {
  return (
    <div
      key={category.id}
      className="flex items-start justify-between rounded-md border
        border-gray-200 bg-white p-4"
    >
      <div>
        <p className="font-medium text-gray-800">
          {category.name}{' '}
          <span className="text-sm text-gray-500">({category.count})</span>
        </p>
        <p className="mt-1 text-sm text-gray-600">{category.words}</p>
      </div>
      <button
        type="button"
        onClick={() => onDelete(category.id)}
        className="flex"
      >
        <Trash2 /> Удалить
      </button>
    </div>
  )
}

export const WordsList = ({
  title,
  categories,
}: {
  title: string
  categories: Array<any>
}) => {
  return (
    <div className="h-full flex-1 rounded-lg bg-gray-200 p-6">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h2">{title}</Typography>
        <TextField placeholder="Поиск..." />
      </div>

      <div className="vertical gap-2 space-y-4">
        {categories.map((category: any) => (
          <Link
            to={category.linkTo}
            key={category.id}
            // @ts-ignore
            params={{ 'category-id': String(category.id) }}
          >
            <CategoryItem
              category={category}
              // onDelete={() => handleDelete(category.id)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export const StopWordsManager = () => {
  const [categories, setCategories] = useState(MOCK_WORDS_CATEGORY)
  const [newCategory, setNewCategory] = useState('')

  const handleAdd = () => {
    if (!newCategory.trim()) {
      return
    }

    setCategories([
      ...categories,
      {
        id: Date.now(),
        name: newCategory,
        count: 0,
        words: '',
        linkTo: '/manage/stop-words/$category-id',
      },
    ])
    setNewCategory('')
  }

  return (
    <ManagerWrapper
      topSlot={<Header title="Стоп слова" />}
      categories={categories}
      newCategory={newCategory}
      setNewCategory={setNewCategory}
      handleAdd={handleAdd}
    >
      <WordsList title="stop-words" categories={categories} />
    </ManagerWrapper>
  )
}
