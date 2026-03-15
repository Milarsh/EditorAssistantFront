import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { useArticlesList } from '@/entities/articles/lib/use-articles-list'
import { useIntersectionObserver } from '@/features/articles-feed/lib/hooks/use-intersection'
import { ArticleCard } from '@/shared/ui/article-card'
import { Loader } from '@/shared/ui/loader'

const isSocialMedia = (guid: string | null | undefined) => {
  if (!guid) {
    return false
  }

  const lower = guid.toLowerCase()

  return lower.includes('vk') || lower.includes('tg')
}

const filterByTab = <T extends { guid?: string | null }>(
  articles: T[],
  tab: string,
): T[] => {
  if (tab === 'socialMedia') {
    return articles.filter((a) => isSocialMedia(a.guid))
  }

  if (tab === 'news') {
    return articles.filter((a) => !isSocialMedia(a.guid))
  }

  return articles
}

type ArticlesListProps = {
  activeTab: string
}

export const ArticlesList = ({ activeTab }: ArticlesListProps) => {
  const { filters } = useArticlesFeedStore()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useArticlesList(filters)
  const observerRef = useIntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  })

  const articles = data?.pages.flatMap((page) => page.data.items) ?? []
  const withoutParents = articles.filter(
    (article) => !article.parent_article_id,
  )
  const filteredArticles = filterByTab(withoutParents, activeTab)

  return (
    <div className="vertical gap-4">
      {filteredArticles.map((article, index) => {
        const shouldAttachRef =
          filteredArticles.length > 1 && index === filteredArticles.length - 2

        return (
          <div key={article.id} ref={shouldAttachRef ? observerRef : undefined}>
            <ArticleCard article={article} />
          </div>
        )
      })}

      {isFetchingNextPage && <Loader />}
    </div>
  )
}
