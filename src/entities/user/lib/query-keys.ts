import { createQueryKeys } from '@lukemorales/query-key-factory'

import { httpClient } from '@/shared/api/http-client'
import { createKeys } from '@/shared/api/query-keys-builder'

export const userQueryKeys = createQueryKeys('user', {
  info: createKeys(httpClient.api.authWhoami),
})
