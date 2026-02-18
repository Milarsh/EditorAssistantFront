import { useQueryClient } from '@tanstack/react-query'

import {
  httpClient,
  type KeyWord,
  type KeyWordUpsertRequest,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { keyWordsQueryKeys } from './query-keys.ts'

export const useKeyWordCreate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<KeyWord, KeyWordUpsertRequest>({
    mutationFn: (values: KeyWordUpsertRequest) =>
      httpClient.api.keyWordsCreate(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keyWordsQueryKeys.list().queryKey,
      })
    },
  })
}
