import { Link } from '@tanstack/react-router'
import { Trash2 } from 'lucide-react'
import type { MouseEventHandler } from 'react'

import { useStopWordsByCategory } from '@/entities/stop-words'
import { useStopCategoryDelete } from '@/entities/stop-words-categories'
import type { StopCategory, StopWordsList } from '@/shared/api'
import { Typography } from '@/shared/ui/typography'

const stopWordsToString = (words: StopWordsList): string => {
  return words.map((w) => w.value).join(', ')
}

export const CategoryItem = ({ category }: { category: StopCategory }) => {
  const { mutate: deleteCategory, normalizedError } = useStopCategoryDelete()
  const categoryStopWords = useStopWordsByCategory(category.id)

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    deleteCategory(category.id)
  }

  return (
    <Link
      className="flex items-start justify-between rounded-md border
        border-gray-200 bg-white p-4"
      to="/manage/stop-words/$category-id"
      params={{ 'category-id': String(category.id) }}
    >
      <div className="min-w-0">
        <Typography>
          {`${category.title} `}({categoryStopWords.length})
        </Typography>

        <Typography variant="body" className="line-clamp-3 break-words">
          {stopWordsToString(categoryStopWords)}
        </Typography>
      </div>

      <div className="vertical items-end">
        <button type="button" onClick={handleDelete} className="flex">
          <Trash2 /> Удалить
        </button>

        {normalizedError?.message && (
          <Typography className="text-right" variant="error">
            {normalizedError.message}
          </Typography>
        )}
      </div>
    </Link>
  )
}
