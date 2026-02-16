import { useQueryClient } from '@tanstack/react-query'

import {
  type ArticleCleanupRequest,
  type ArticleCleanupResponse,
  httpClient,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { articlesQueryKeys } from './article-query-keys'

export const useArticlesCleanup = () => {
  const queryClient = useQueryClient()

  return useAppMutation<ArticleCleanupResponse, ArticleCleanupRequest>({
    mutationFn: (values: ArticleCleanupRequest) =>
      httpClient.api.articlesCleanupCreate(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: articlesQueryKeys.list().queryKey,
      })
    },
  })
}
