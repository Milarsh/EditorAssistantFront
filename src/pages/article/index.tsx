import { useParams, useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { MOCK_ARTICLES } from '@/shared/mock/atricle'
import { MOCK_SOURCES } from '@/shared/mock/source.ts'
import { Typography } from '@/shared/ui/typography'

export const ArticlePage = () => {
  const { id } = useParams({ from: '/article/$id' })
  const { history } = useRouter()
  const article = MOCK_ARTICLES.find(
    (articleItem) => String(articleItem.id) === id,
  )

  if (!article) {
    return <Typography variant="h2">Статья не найдена</Typography>
  }

  const handleGoBack = () => history.back()
  const source = MOCK_SOURCES.find(
    (sourceItem) => sourceItem.id === article.source_id,
  )

  return (
    <div>
      <div className="flex h-15 items-center gap-2 px-4">
        <button
          type="button"
          onClick={handleGoBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft />
          Назад
        </button>
      </div>

      <article className="vertical mx-4 my-6">
        <Typography variant="h2" className="mb-4">
          {article.title}
        </Typography>

        <Typography variant="footnote" className="mb-2 text-gray-600">
          {article.description}
        </Typography>
        <Typography variant="caption" className="mb-2 text-gray-600">
          Источник: {source?.name}
        </Typography>
        <Typography variant="caption" className="mb-2 text-gray-600">
          Ссылка на новость: {article.link}
        </Typography>

        <Typography variant="body" className="mb-2">
          Дата и время публикации:
          {article.published_at
            ? new Date(article.published_at).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })
            : 'Дата отсутствует'}
        </Typography>
      </article>
    </div>
  )
}
