import { Link } from '@tanstack/react-router'

import type { Article } from '@/shared/api'
import { MOCK_SOURCES } from '@/shared/mock/source'
import { Typography } from '@/shared/ui/typography'

export const ArticleCard = ({ article }: { article: Article }) => {
  const source = MOCK_SOURCES.find((sourceItem) => sourceItem.id === article.source_id)

  return (
    <Link to="/article/$id" params={{ id: String(article.id) }}>
      <div
        className="vertical cursor-pointer gap-2 rounded-2xl border
        border-gray-200 bg-white p-4 transition-shadow hover:shadow-sm"
      >
        <Typography variant="caption">{source?.name}</Typography>
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
  );
}
