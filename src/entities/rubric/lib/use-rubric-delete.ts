import { useQueryClient } from '@tanstack/react-query'

import { httpClient } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { rubricQueryKeys } from './query-keys'

type DeleteFn = typeof httpClient.api.rubricsDelete
type DeleteResponse = Awaited<ReturnType<DeleteFn>>
type DeleteData = DeleteResponse['data']
type DeleteVars = Parameters<DeleteFn>[0]

export const useRubricDelete = () => {
  const queryClient = useQueryClient()

  return useAppMutation<DeleteData, DeleteVars>({
    mutationFn: (id) => httpClient.api.rubricsDelete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: rubricQueryKeys.list().queryKey,
      })
    },
  })
}
