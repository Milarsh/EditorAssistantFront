import { useSourceDelete } from '@/entities/source/lib/use-source-delete'
import { useSourcesList } from '@/entities/source/lib/use-sources-list'
import { Header } from '@/shared/ui/header'
import { List } from '@/shared/ui/list'

import { SourceListItem } from './sources-list-item'

export const SourcesManager = () => {
  const { data: sources = [] } = useSourcesList()
  const { mutate } = useSourceDelete()

  return (
    <div className="h-screen">
      <Header title="Управление источниками" />

      <div className="h-full bg-[#F8FAFC] p-5">
        <List
          renderItem={(source) => (
            <SourceListItem
              source={source}
              onDelete={() => mutate(source.id)}
            />
          )}
          items={sources}
        />
      </div>
    </div>
  )
}
