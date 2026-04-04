import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { RequestParams } from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

export const stopCategoriesQueryKeys = createQueryKeys('categories', {
  list: (params?: RequestParams) => ({
    queryKey: ['categories', params],
    queryFn: () =>
      httpClient.api.stopCategoriesList(params).then((res) => res.data),
  }),
})
