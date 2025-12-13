import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { sourcesQueryKeys } from './sources-query-keys'

export const useSourcesList = (params?: RequestParams) =>
  useQuery({
    ...sourcesQueryKeys.list(params),
  })
