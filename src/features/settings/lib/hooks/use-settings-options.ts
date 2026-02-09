import { useQuery } from '@tanstack/react-query'

import { settingsQueryKeys } from './query-keys'

export const useSettingsOptionSingle = (code: string) =>
  useQuery({
    ...settingsQueryKeys.option(code),
  })
