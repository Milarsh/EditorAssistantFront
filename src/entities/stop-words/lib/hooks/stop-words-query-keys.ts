import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { RequestParams } from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

export const stopWordsQueryKeys = createQueryKeys('stop-words', {
  list: (params?: RequestParams) => ({
    queryKey: ['stop-words', params],
    queryFn: () => httpClient.api.stopWordsList(params).then((res) => res.data),
  }),
})
