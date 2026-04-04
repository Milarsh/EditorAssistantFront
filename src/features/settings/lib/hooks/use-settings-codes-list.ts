import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { settingsQueryKeys } from './query-keys'

export const useSettingsCodesList = (params?: RequestParams) =>
  useQuery({
    ...settingsQueryKeys.codes(params),
  })
