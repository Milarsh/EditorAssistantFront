import { useQueryClient } from '@tanstack/react-query'

import { httpClient } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { keyWordsQueryKeys } from './query-keys.ts'

type DeleteFn = typeof httpClient.api.keyWordsDelete
type DeleteResponse = Awaited<ReturnType<DeleteFn>>
type DeleteData = DeleteResponse['data']
type DeleteVars = Parameters<DeleteFn>[0]

export const useKeyWordDelete = () => {
  const queryClient = useQueryClient()

  return useAppMutation<DeleteData, DeleteVars>({
    mutationFn: (id) => httpClient.api.keyWordsDelete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keyWordsQueryKeys.list().queryKey,
      })
    },
  })
}
