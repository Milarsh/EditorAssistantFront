import { useParams, useRouter } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { useArticleDetails } from '@/entities/articles/lib/use-article-details'
import { Typography } from '@/shared/ui/typography'

export const ArticlePage = () => {
  const { id } = useParams({ from: '/_auth/article/$id' })
  const { history } = useRouter()
  const { data: article } = useArticleDetails(Number(id))

  if (!article) {
    return <Typography variant="h2">Статья не найдена</Typography>
  }

  const handleGoBack = () => history.back()

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
        {article.description && (
          <div dangerouslySetInnerHTML={{ __html: article.description }} />
        )}
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
