import { useState } from 'react'
import { SidebarFilter } from '@/widgets/sidebar-filter'

import { NewsFeed } from '@/widgets/news-feed'
import { LeftSidePanel } from '@/widgets/left-side-panel'

export const MainPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  return (
    <main className="flex min-h-screen">
      <LeftSidePanel />
      <div className="h-screen flex-1 overflow-y-auto">
        <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
      </div>
      <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
    </main>
  )
}
