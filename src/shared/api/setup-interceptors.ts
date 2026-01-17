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
  httpClient.instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        useAuthStore.getState().actions.logout?.()
        window.location.href = '/login'
      }

      return Promise.reject(error)
    },
  )
}
