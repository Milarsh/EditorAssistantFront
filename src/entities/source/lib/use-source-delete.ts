import { useMutation, useQueryClient } from '@tanstack/react-query'

import { articlesQueryKeys } from '@/entities/articles/lib/article-query-keys'
import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { httpClient } from '@/shared/api'

import { sourcesQueryKeys } from './sources-query-keys'

export const useSourceDelete = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useMutation({
    mutationFn: (id: number) => httpClient.api.sourcesDelete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: sourcesQueryKeys.list().queryKey,
      })
      const { order } = useArticlesFeedStore.getState().filters

      queryClient.invalidateQueries({
        queryKey: articlesQueryKeys.list({ order }).queryKey,
      })
    },
  })

  return { mutate, isPending }
}
