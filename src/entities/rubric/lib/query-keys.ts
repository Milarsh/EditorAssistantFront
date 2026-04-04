import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { RequestParams } from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

export const rubricQueryKeys = createQueryKeys('sources', {
  list: (params?: RequestParams) => ({
    queryKey: ['rubrics', params],
    queryFn: () => httpClient.api.rubricsList(params).then((res) => res.data),
  }),
})
