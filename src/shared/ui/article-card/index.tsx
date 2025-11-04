import type { Article } from '@/shared/api'

export const ArticleCard = ({ article }: { article: Article }) => (
  <div
    className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white
      p-4 transition-shadow hover:shadow-sm"
  >
    <span className="text-xs font-semibold text-blue-600 uppercase">
      {article.fetched_at}
    </span>
    <h3 className="text-lg leading-snug font-semibold text-gray-900">
      {article.title}
    </h3>
    <p className="mt-auto text-sm text-gray-500">
      {article.published_at
        ? new Date(article.published_at).toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
        : 'Дата отсутствует'}
    </p>
  </div>
)
