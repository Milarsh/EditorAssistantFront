import { useQueryClient } from '@tanstack/react-query'

import {
  httpClient,
  type StopCategory,
  type StopCategoryUpsertRequest,
} from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { stopCategoriesQueryKeys } from './stop-categories-query-keys.ts'

export const useStopCategoriesCreate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<StopCategory, StopCategoryUpsertRequest>({
    mutationFn: (values: StopCategoryUpsertRequest) =>
      httpClient.api.stopCategoriesCreate(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: stopCategoriesQueryKeys.list().queryKey,
      })
    },
  })
}
