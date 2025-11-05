import { useState } from 'react'

import { Header } from '@/shared/ui/header'
import { LeftSidePanel } from '@/widgets/left-side-panel'
import { NewsFeed } from '@/widgets/news-feed'
import { SidebarFilter } from '@/widgets/sidebar-filter'

export const MainPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)

  return (
    <main className="h-screen vertical">
      <Header />
      <div className="flex overflow-hidden">
        <LeftSidePanel />
        <div className="overflow-y-auto">
          <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
        </div>
        <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
      </div>
    </main>
    // <main className="min-h-screen">
    //   <Header />
    //   <div className="flex flex-1">
    //     <LeftSidePanel />
    //     <div className="h-full flex-1">
    //       <NewsFeed handleOpenFilter={() => setIsOpenFilter(true)} />
    //     </div>
    //     <SidebarFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
    //   </div>
    // </main>
  )
}
