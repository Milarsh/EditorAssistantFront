import { useQuery } from '@tanstack/react-query'

import { userQueryKeys } from './query-keys'

export const useUserInfo = (enabled: boolean = true) =>
  useQuery({
    ...userQueryKeys.info(),
    enabled,
  })
