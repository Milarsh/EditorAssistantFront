import { useQueryClient } from '@tanstack/react-query'

import { httpClient, type Setting, type SettingUpdate } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { settingsQueryKeys } from './query-keys'

export const useSettingsUpdate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<Setting, SettingUpdate>({
    mutationFn: (values: SettingUpdate) =>
      httpClient.api.settingsCreate(values),

    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({
        queryKey: settingsQueryKeys.list({ codes: data.code }).queryKey,
      })
    },
  })
}
