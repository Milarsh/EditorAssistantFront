import { useParams, useRouter } from '@tanstack/react-router'
import {
  ArrowLeft,
  Calendar,
  Copy,
  FileText,
  Link,
  Pencil,
  Trash2,
} from 'lucide-react'
import toast from 'react-hot-toast'

import { useArticleDetails } from '@/entities/articles/lib/use-article-details'
import { useArticleStats } from '@/entities/articles/lib/use-article-stats'
import { Typography } from '@/shared/ui/typography'

export const ArticlePage = () => {
  const { id } = useParams({ from: '/_auth/article/$id' })
  const { history } = useRouter()
  const { data: article, isPending } = useArticleDetails(Number(id))
  const { data: stats } = useArticleStats(Number(id))

  if (!article || isPending) {
    return <Typography variant="h2">Загрузка</Typography>
  }

  const handleGoBack = () => history.back()

  const handleCopyText = async () => {
    if (!article.description) {
      return
    }

    const plainText = article.description.replace(/<[^>]+>/g, '')

    try {
      await navigator.clipboard.writeText(plainText)

      toast.success('Текст успешно скопирован')
    } catch (e) {
      toast.error('Не удалось скопировать текст')
    }
  }

  return (
    <div>
      <div
        className="mb-2 flex h-20 w-full items-center gap-2 border-b
          border-gray-300 p-4"
      >
        <button
          type="button"
          onClick={handleGoBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft />
          Назад
        </button>
      </div>

      <div className="px-6">
        <Typography
          variant="h2"
          className="rounded-tl-xl rounded-tr-xl bg-blue-500 p-2 text-3xl
            text-white"
        >
          {article.title}
        </Typography>
        <article
          className="vertical flex min-h-200 flex-row border-x border-gray-300
            shadow-sm"
        >
          <div className="flex-1">
            {article.description && (
              <div dangerouslySetInnerHTML={{ __html: article.description }} />
            )}
            {stats && (
              <div className="border-t border-gray-300 py-2 text-gray-500">
                <Typography variant="body">
                  Количество стоп-слов: {stats.stop_words_count}
                </Typography>
                <Typography variant="body">
                  Количество ключевых слов: {stats.key_words_count}
                </Typography>
                <Typography
                  variant="body"
                  className="flex flex-row items-center gap-1"
                >
                  Ключевые слова:
                </Typography>
              </div>
            )}
            <div className="flex items-center gap-4 text-lg text-gray-500">
              <Typography
                variant="body"
                className="mb-2 flex flex-row items-center gap-2"
              >
                <Calendar size={26} />
                {article.published_at
                  ? new Date(article.published_at)
                      .toLocaleString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      })
                      .replace(',', '')
                  : 'Дата отсутствует'}
              </Typography>

              <div className="mb-2 flex flex-row items-center gap-2">
                <FileText size={20} />
                Источник: {article.source_id}
              </div>

              <a
                className="mb-2 flex flex-row items-center gap-2 text-gray-600"
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                <Link size={20} />
                Перейти к оригиналу
              </a>
            </div>
          </div>
        </article>
      </div>

      <div
        className="mt-2 flex w-full flex-row items-center justify-end gap-4
          border-t border-gray-300 px-8 py-4"
      >
        <button type="button" className="flex flex-row items-center gap-2">
          <Trash2 size={18} /> Удалить
        </button>
        <button type="button" className="flex flex-row items-center gap-2">
          <Pencil size={18} />
          Редактировать
        </button>
        <button
          type="button"
          onClick={handleCopyText}
          className="flex flex-row items-center gap-2"
        >
          <Copy size={18} />
          Копировать текст
        </button>
      </div>
    </div>
  )
}
