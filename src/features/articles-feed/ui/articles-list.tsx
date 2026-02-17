import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { useArticlesList } from '@/entities/articles/lib/use-articles-list'
import { useIntersectionObserver } from '@/features/articles-feed/lib/hooks/use-intersection'
import { ArticleCard } from '@/shared/ui/article-card'
import { Loader } from '@/shared/ui/loader'

export const ArticlesList = () => {
  const { filters } = useArticlesFeedStore()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useArticlesList(filters)
  const observerRef = useIntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  })

  const articles = data?.pages.flatMap((page) => page.data.items) ?? []

  return (
    <div className="vertical gap-4">
      {articles.map((article, index) => {
        const shouldAttachRef =
          articles.length > 1 && index === articles.length - 2

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
