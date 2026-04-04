import { useQueryClient } from '@tanstack/react-query'

import { httpClient, type Rubric, type RubricUpsertRequest } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { rubricQueryKeys } from './query-keys'

export const useRubricCreate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<Rubric, RubricUpsertRequest>({
    mutationFn: (values: RubricUpsertRequest) =>
      httpClient.api.rubricsCreate(values),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: rubricQueryKeys.list().queryKey,
      })
    },
  })
}
