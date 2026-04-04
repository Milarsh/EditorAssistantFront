import { useQueryClient } from '@tanstack/react-query'

import {
  httpClient,
  type StopWord,
  type StopWordUpsertRequest,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { stopWordsQueryKeys } from './query-keys.ts'

export const useStopWordCreate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<StopWord, StopWordUpsertRequest>({
    mutationFn: (values: StopWordUpsertRequest) =>
      httpClient.api.stopWordsCreate(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stopWordsQueryKeys.list().queryKey,
      })
    },
  })
}
