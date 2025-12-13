import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { RequestParams } from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

export const sourcesQueryKeys = createQueryKeys('sources', {
  list: (params?: RequestParams) => ({
    queryKey: ['sources', params],
    queryFn: () => httpClient.api.sourcesList(params).then((res) => res.data),
  }),
})
