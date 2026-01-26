import { useQueryClient } from '@tanstack/react-query'

import { articlesQueryKeys } from '@/entities/articles/lib/article-query-keys'
import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { httpClient, type Source, type SourceCreate } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { sourcesQueryKeys } from './sources-query-keys'

export const useSourceCreate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<Source, SourceCreate>({
    mutationFn: (values: SourceCreate) => httpClient.api.sourcesCreate(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: sourcesQueryKeys.list().queryKey,
      })
      const { order } = useArticlesFeedStore.getState()

      queryClient.invalidateQueries({
        queryKey: articlesQueryKeys.list({ order }).queryKey,
      })
    },
  })
}
