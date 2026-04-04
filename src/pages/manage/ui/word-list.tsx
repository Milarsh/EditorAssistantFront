import { Link } from '@tanstack/react-router'
import { Trash2 } from 'lucide-react'

import { TextField } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

const CategoryItem = ({ category, onDelete }: any) => {
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

export const WordsList = ({ title, categories, handleDelete }: any) => {
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
              onDelete={() => handleDelete(category.id)}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
