import { Trash2 as TrashIcon } from 'lucide-react'

import { useArticlesList } from '@/entities/articles/lib/use-articles-list'
import type { Source } from '@/shared/api'
import { ListItem } from '@/shared/ui/list/list-item'
import { Typography } from '@/shared/ui/typography'

type SourceListItemProps = {
  onDelete?: () => void
  source: Source
}

export const SourceListItem = ({ onDelete, source }: SourceListItemProps) => {
  const { data: articles } = useArticlesList({ source_id: source.id })
  const articlesTotal = articles?.pages[0]?.data.total

  return (
    <ListItem
      left={<Typography variant="body">{source.name}</Typography>}
      right={
        <>
          <Typography variant="body" className="text-gray-300">
            {articlesTotal}
          </Typography>
          <TrashIcon className="cursor-pointer" onClick={onDelete} />
        </>
      }
    />
  )
}
