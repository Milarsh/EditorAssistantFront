import { useQueryClient } from '@tanstack/react-query'

import { articlesQueryKeys } from '@/entities/articles/lib/article-query-keys'
import { useArticlesFeedStore } from '@/entities/articles/lib/use-articles-feed-store'
import { sourcesQueryKeys } from '@/entities/sources/lib/sources-query-keys'
import { userQueryKeys } from '@/entities/user/lib'
import { useAuthStore } from '@/features/auth/store'
import {
  type AuthLoginRequest,
  type AuthLoginResponse,
  httpClient,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

export const useLogin = () => {
  const queryClient = useQueryClient()

  return useAppMutation<AuthLoginResponse, AuthLoginRequest>({
    mutationFn: (values) => httpClient.api.authLogin(values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: sourcesQueryKeys.list().queryKey,
      })

      const { order } = useArticlesFeedStore.getState()

      queryClient.invalidateQueries({
        queryKey: articlesQueryKeys.list({ order }).queryKey,
      })

      queryClient.invalidateQueries({
        queryKey: userQueryKeys.info().queryKey,
      })

      useAuthStore.getState().actions.setAccessToken(data.data.access_token)
      useAuthStore.getState().actions.login()
    },
  })
}
