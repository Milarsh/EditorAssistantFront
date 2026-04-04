import { useQuery } from '@tanstack/react-query'

import { settingsQueryKeys } from './query-keys'

export const useCurrentSettings = (params?: { codes: string }) =>
  useQuery({
    ...settingsQueryKeys.list(params),
  })
