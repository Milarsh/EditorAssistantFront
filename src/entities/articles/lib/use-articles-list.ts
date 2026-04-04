import { useInfiniteQuery } from '@tanstack/react-query'

import { httpClient } from '@/shared/api'

import type { ArticlesListParams } from '../model'

export const useArticlesList = (filters?: ArticlesListParams) => {
  return useInfiniteQuery({
    queryKey: ['articles', filters],

    initialPageParam: 0,

    queryFn: ({ pageParam }) =>
      httpClient.api.articlesList({
        ...filters,
        offset: pageParam,
        limit: filters?.limit ?? 10,
      }),

    getNextPageParam: (lastPage, allPages) => {
      const limit = filters?.limit ?? 10

      if (lastPage.data.items.length < limit) {
        return undefined
      }

      return allPages.length * limit
    },
  })
}
