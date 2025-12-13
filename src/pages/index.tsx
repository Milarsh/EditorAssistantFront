import { useState } from 'react'

import { Header } from '@/shared/ui/header'
import { NewsFeed } from '@/widgets/articles-feed'
import { SidebarFilter } from '@/widgets/sidebar-filter'
import { SourcesPanel } from '@/widgets/sources-panel'

export const MainPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  return (
    <main className="vertical h-screen">
      <Header />
      <div className="flex overflow-hidden">
        <SourcesPanel />
        <div className="w-full overflow-y-auto">
          <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
        </div>
        <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
      </div>
    </main>
  )
}
