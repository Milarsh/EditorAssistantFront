import type { ReactNode } from 'react'

import { cn } from '@/shared/lib'

type WithId = {
  id: string | number
}

type ListProps<T extends WithId> = {
  items: T[]
  renderItem: (item: T) => ReactNode
}

export const List = <T extends WithId>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul className={cn('vertical w-full gap-4')}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
