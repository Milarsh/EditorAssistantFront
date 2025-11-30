import { useState } from 'react'

import { ManagerWrapper } from '@/pages/manage/ui/manager-wrapper'
import { WordsList } from '@/pages/manage/ui/word-list'
import { Header } from '@/shared/ui/header'

const MOCK_WORDS_CATEGORY = [
  {
    id: 1,
    name: 'Коммерция / объявления',
    count: 23,
    words:
      'куплю, продам, аренда, вакансии, реклама, работа, трудоустройство, акция, скидка, промокод, оффер',
    linkTo: '/manage/key-words/$category-id',
  },
  {
    id: 2,
    name: 'Слова соцсетей',
    count: 14,
    words: 'лайк, подписка, репост, комментарий, блогер, видео, стрим',
    linkTo: '/manage/key-words/$category-id',
  },
  {
    id: 3,
    name: 'Финансы / бизнес',
    count: 17,
    words:
      'биржа, акции, курс, брокер, инвестиции, фондовый рынок, Московская биржа',
    linkTo: '/manage/key-words/$category-id',
  },
  {
    id: 4,
    name: 'Транспорт / трафик',
    count: 12,
    words: 'пробки, трафик, ДТП, маршрут, метро',
    linkTo: '/manage/key-words/$category-id',
  },
]

export const KeyWordsManager = () => {
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
        linkTo: '/manage/key-words/$category-id',
      },
    ])
    setNewCategory('')
  }

  const handleDelete = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id))
  }

  return (
    <ManagerWrapper
      topSlot={<Header title="Ключевые слова" />}
      categories={categories}
      newCategory={newCategory}
      setNewCategory={setNewCategory}
      handleAdd={handleAdd}
    >
      <WordsList
        title="key-words"
        categories={categories}
        handleDelete={handleDelete}
      />
    </ManagerWrapper>
  )
}
