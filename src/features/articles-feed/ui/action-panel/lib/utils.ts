import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import {
  ArticlesListParamsOrderEnum,
  ArticlesListParamsRelevanceEnum,
} from '@/shared/api'

import type { SortOption } from '../model'

export const handleChangeFilters = (value: SortOption) => {
  const { setFilters } = useArticlesFeedStore.getState()

  switch (value) {
    case 'newest':
      setFilters({
        order: ArticlesListParamsOrderEnum.Desc,
        relevance: undefined,
      })
      break

    case 'oldest':
      setFilters({
        order: ArticlesListParamsOrderEnum.Asc,
        relevance: undefined,
      })
      break

    case 'relevant':
      setFilters({
        relevance: ArticlesListParamsRelevanceEnum.Desc,
        order: undefined,
      })
      break

    case 'notRelevant':
      setFilters({
        relevance: ArticlesListParamsRelevanceEnum.Asc,
        order: undefined,
      })
      break
    default: {
      /* empty */
    }
  }
}
