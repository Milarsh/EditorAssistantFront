import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { RequestParams } from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

export const keyWordsQueryKeys = createQueryKeys('key-words', {
  list: (params?: RequestParams) => ({
    queryKey: ['key-words', params],
    queryFn: () => httpClient.api.keyWordsList(params).then((res) => res.data),
  }),
})
