import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { stopWordsQueryKeys } from './query-keys.ts'

export const useStopWordsList = (params?: RequestParams) =>
  useQuery({
    ...stopWordsQueryKeys.list(params),
  })
