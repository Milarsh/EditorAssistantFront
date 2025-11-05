import { useState } from 'react'

import { Header } from '@/shared/ui/header'
import { LeftSidePanel } from '@/widgets/left-side-panel'
import { NewsFeed } from '@/widgets/news-feed'
import { SidebarFilter } from '@/widgets/sidebar-filter'

export const MainPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidePanel />
        <div className="h-full flex-1 overflow-y-auto">
          <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
        </div>
        <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
      </div>
    </main>
  )
}
