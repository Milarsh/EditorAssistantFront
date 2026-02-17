import { NewsFeed } from '@/features/articles-feed'
import { Header } from '@/shared/ui/header'
import { SourcesPanel } from '@/widgets/sources-panel'

export const MainPage = () => {
  return (
    <main className="vertical h-screen">
      <Header />
      <div className="flex overflow-hidden">
        <SourcesPanel />
        <div className="w-full overflow-y-auto">
          <NewsFeed />
        </div>
      </div>
    </main>
  )
}
