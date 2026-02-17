import { Trash2 as TrashIcon } from 'lucide-react'

import { ListItem } from '@/shared/ui/list/list-item'
import { Typography } from '@/shared/ui/typography'

type SourceListItemProps = {
  name: string
  newsCount: number
  onDelete?: () => void
}

export const SourceListItem = ({
  name,
  newsCount,
  onDelete,
}: SourceListItemProps) => {
  return (
    <ListItem
      left={<Typography variant="body">{name}</Typography>}
      right={
        <>
          <Typography variant="body" className="text-gray-300">
            {newsCount}
          </Typography>
          <TrashIcon className="cursor-pointer" onClick={onDelete} />
        </>
      }
    />
  )
}
