import { useQueryClient } from '@tanstack/react-query'

import { httpClient } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { stopWordsQueryKeys } from './stop-words-query-keys'

type DeleteFn = typeof httpClient.api.stopWordsDelete
type DeleteResponse = Awaited<ReturnType<DeleteFn>>
type DeleteData = DeleteResponse['data']
type DeleteVars = Parameters<DeleteFn>[0]

export const useStopWordDelete = () => {
  const queryClient = useQueryClient()

  return useAppMutation<DeleteData, DeleteVars>({
    mutationFn: (id) => httpClient.api.stopWordsDelete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stopWordsQueryKeys.list().queryKey,
      })
    },
  })
}
