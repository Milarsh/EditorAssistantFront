import { useQueryClient } from '@tanstack/react-query'

import { httpClient } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { stopCategoriesQueryKeys } from './stop-categories-query-keys.ts'

type DeleteFn = typeof httpClient.api.stopCategoriesDelete
type DeleteResponse = Awaited<ReturnType<DeleteFn>>
type DeleteData = DeleteResponse['data']
type DeleteVars = Parameters<DeleteFn>[0]

export const useStopCategoryDelete = () => {
  const queryClient = useQueryClient()

  return useAppMutation<DeleteData, DeleteVars>({
    mutationFn: (id) => httpClient.api.stopCategoriesDelete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stopCategoriesQueryKeys.list().queryKey,
      })
    },
  })
}
