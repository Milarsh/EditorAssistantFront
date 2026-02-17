import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { rubricQueryKeys } from './query-keys'

export const useRubricsList = (params?: RequestParams) =>
  useQuery({
    ...rubricQueryKeys.list(params),
  })
