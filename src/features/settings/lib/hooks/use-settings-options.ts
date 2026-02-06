import { useQuery } from '@tanstack/react-query'

import { settingsQueryKeys } from './query-keys'

export const useSettingsOptions = () =>
  useQuery({
    ...settingsQueryKeys.optionsList(),
  })

export const useSettingsOptionSingle = (code: string) =>
  useQuery({
    ...settingsQueryKeys.option(code),
  })
