import { createQueryKeys } from '@lukemorales/query-key-factory'

import type {
  RequestParams,
  SettingOptions,
  SettingOptionsList,
} from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

export const settingsQueryKeys = createQueryKeys('settings', {
  list: (params?: { codes?: string }) => ({
    queryKey: ['list', params],
    queryFn: () => httpClient.api.settingsList(params).then((res) => res.data),
  }),
  codes: (params?: RequestParams) => ({
    queryKey: ['codes', params],
    queryFn: () =>
      httpClient.api.settingsCodesList(params).then((res) => res.data),
  }),
  option: (code: string) => ({
    queryKey: ['option', code],
    queryFn: () =>
      httpClient.api
        .settingsOptionsList({ code })
        .then((res) => res.data as SettingOptions),
  }),

  optionsList: () => ({
    queryKey: ['options-list'],
    queryFn: () =>
      httpClient.api
        .settingsOptionsList()
        .then((res) => res.data as SettingOptionsList),
  }),
})
