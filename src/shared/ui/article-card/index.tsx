import { Link } from '@tanstack/react-router'

import type { ArticleListItem } from '@/shared/api'
import { Typography } from '@/shared/ui/typography'

export const ArticleCard = ({ article }: { article: ArticleListItem }) => {
  return (
    <Link to="/article/$id" params={{ id: String(article.id) }}>
      <div
        className="vertical cursor-pointer gap-2 rounded-2xl border
          border-gray-200 bg-white p-4 transition-shadow hover:shadow-sm"
      >
        <div className="flex items-center gap-4">
          <Typography variant="caption">{`${article.source_type}/${article?.source_name}`}</Typography>
          <div className="flex gap-2">
            {article.rubric_title && (
              <div className="flex-center rounded-full bg-[#87A7ED] px-3 py-1">
                <Typography variant="caption" className="text-white">
                  {article?.rubric_title}
                </Typography>
              </div>
            )}

            {article.is_trending && (
              <div className="flex-center rounded-full bg-[#B287EDC2] px-3 py-1">
                <Typography variant="caption" className="text-white">
                  В тренде
                </Typography>
              </div>
            )}
          </div>
        </div>
        {article.key_words_count !== undefined && (
          <Typography variant="footnote">
            Ключевых слов: {article.key_words_count}
          </Typography>
        )}
        <Typography variant="h3">{article.title}</Typography>
        <Typography variant="body">
          {article.published_at
            ? new Date(article.published_at).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })
            : 'Дата отсутствует'}
        </Typography>
      </div>
    </Link>
  )
}
