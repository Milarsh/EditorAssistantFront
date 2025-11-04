import { useState } from 'react'

import { NewsFeed } from '@/widgets/news-feed'
import { SidebarFilter } from 'src/widgets/sidebar-filter'
import { LeftSidePanel } from '@/widgets/left-side-panel'

export const MainPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  return (
    <main className="min-h-screen flex">
      <LeftSidePanel/>
      <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
      <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
    </main>
  )
}
