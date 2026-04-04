import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { stopCategoriesQueryKeys } from './stop-categories-query-keys.ts'

export const useStopCategoriesList = (params?: RequestParams) =>
  useQuery({
    ...stopCategoriesQueryKeys.list(params),
  })
