import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { stopWordsQueryKeys } from './stop-words-query-keys'

export const useStopWordsList = (params?: RequestParams) =>
  useQuery({
    ...stopWordsQueryKeys.list(params),
  })
