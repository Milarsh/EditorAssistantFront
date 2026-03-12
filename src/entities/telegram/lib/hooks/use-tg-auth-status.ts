import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { telegramQueryKeys } from './query-keys'

export const useTgAuthStatus = (params?: RequestParams) =>
  useQuery({
    ...telegramQueryKeys.list(params),
  })
