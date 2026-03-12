import { createQueryKeys } from '@lukemorales/query-key-factory'

import { httpClient, type RequestParams } from '@/shared/api'

export const telegramQueryKeys = createQueryKeys('telegram', {
  list: (params?: RequestParams) => ({
    queryKey: ['telegram', params],
    queryFn: () =>
      httpClient.api.tgAuthStatusList(params).then((res) => res.data),
  }),
})
