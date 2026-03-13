import { useQueryClient } from '@tanstack/react-query'

import { httpClient, type TgAuthStatus } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { telegramQueryKeys } from './query-keys'

export const useTgAuthLogout = () => {
  const queryClient = useQueryClient()

  return useAppMutation<TgAuthStatus, void>({
    mutationFn: () => httpClient.api.tgAuthLogoutCreate(),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: telegramQueryKeys.list().queryKey,
      })
    },
  })
}
