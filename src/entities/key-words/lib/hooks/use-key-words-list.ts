import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { keyWordsQueryKeys } from './query-keys'

export const useKeyWordsList = (params?: RequestParams) =>
  useQuery({
    ...keyWordsQueryKeys.list(params),
  })
