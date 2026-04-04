import { Trash2 } from 'lucide-react'
import type { MouseEventHandler } from 'react'

import { Typography } from '@/shared/ui/typography'

type CategoryItemProps = {
  title: string
  wordsCount: number
  wordsPreview: string
  onDelete: () => void
  error?: string
}

export const CategoryItem = ({
  title,
  wordsCount,
  wordsPreview,
  onDelete,
  error,
}: CategoryItemProps) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    onDelete()
  }

  return (
    <div
      className="flex items-start justify-between rounded-md border
        border-gray-200 bg-white p-4"
    >
      <div className="min-w-0">
        <Typography>
          {title} ({wordsCount})
        </Typography>

        <Typography variant="body" className="line-clamp-3 break-words">
          {wordsPreview}
        </Typography>
      </div>

      <div className="vertical items-end">
        <button type="button" onClick={handleDelete} className="flex">
          <Trash2 /> Удалить
        </button>

        {error && (
          <Typography className="text-right" variant="error">
            {error}
          </Typography>
        )}
      </div>
    </div>
  )
}

// const wordsArrayToString = (words: StopWordsList): string => {
//   return words.map((w) => w.value).join(', ')
// }
//
// export const CategoryItem = ({ category }: { category: StopCategory }) => {
//   const { mutate: deleteCategory, normalizedError } = useStopCategoryDelete()
//   const categoryStopWords = useStopWordsByCategory(category.id)
//
//   const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
//     e.stopPropagation()
//     e.preventDefault()
//     deleteCategory(category.id)
//   }
//
//   return (
//     <Link
//       className="flex items-start justify-between rounded-md border
//         border-gray-200 bg-white p-4"
//       to="/manage/stop-words/$category-id"
//       params={{ 'category-id': String(category.id) }}
//     >
//       <div className="min-w-0">
//         <Typography>
//           {`${category.title} `}({categoryStopWords.length})
//         </Typography>
//
//         <Typography variant="body" className="line-clamp-3 break-words">
//           {wordsArrayToString(categoryStopWords)}
//         </Typography>
//       </div>
//
//       <div className="vertical items-end">
//         <button type="button" onClick={handleDelete} className="flex">
//           <Trash2 /> Удалить
//         </button>
//
//         {normalizedError?.message && (
//           <Typography className="text-right" variant="error">
//             {normalizedError.message}
//           </Typography>
//         )}
//       </div>
//     </Link>
//   )
// }
