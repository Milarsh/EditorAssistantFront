import { useState } from 'react'
import { SidebarFilter } from 'src/widgets/sidebar-filter'

import { LeftSidePanel } from '@/widgets/left-side-panel'
import { NewsFeed } from '@/widgets/news-feed'

export const MainPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  return (
    <main className="flex min-h-screen">
      <LeftSidePanel />
      <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
      <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
    </main>
  )
}
