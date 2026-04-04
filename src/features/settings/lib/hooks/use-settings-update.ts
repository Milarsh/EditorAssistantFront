import type { QueryKey } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

import { httpClient, type Setting, type SettingUpdate } from '@/shared/api'
import { useAppMutation } from '@/shared/api/lib'

import { settingsQueryKeys } from './query-keys'

type SettingsMutationContext = {
  previousData: Setting[] | undefined
  queryKey: QueryKey
}

export const useSettingsUpdate = () => {
  const queryClient = useQueryClient()

  return useAppMutation<Setting, SettingUpdate, SettingsMutationContext>({
    mutationFn: (values: SettingUpdate) =>
      httpClient.api.settingsCreate(values),

    onMutate: async (newValue) => {
      const { queryKey } = settingsQueryKeys.list({
        codes: newValue.code,
      })

      await queryClient.cancelQueries({ queryKey })

      const previousData = queryClient.getQueryData<Setting[] | undefined>(
        queryKey,
      )

      queryClient.setQueryData(queryKey, (old: any) => {
        if (!old) {
          return old
        }

        return old.map((setting: any) =>
          setting.code === newValue.code
            ? { ...setting, value: newValue.value }
            : setting,
        )
      })

      return { previousData, queryKey }
    },

    onError: (_err, _newValue, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(context.queryKey, context.previousData)
      }
    },

    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries({
        queryKey: settingsQueryKeys.list({
          codes: variables.code,
        }).queryKey,
      })
    },
  })
}
