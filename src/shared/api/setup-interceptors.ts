import { useAuthStore } from '@/features/auth/store'

import type { Api } from './api'

export const setupInterceptors = (httpClient: Api<unknown>) => {
  httpClient.instance.interceptors.request.use(
    (config) => {
      const { accessToken } = useAuthStore.getState()
      const { headers } = config

      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (error) => Promise.reject(error),
  )
}
