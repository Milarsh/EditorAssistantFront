import { API_URL } from '../config'
import { Api } from './api'
import { setupInterceptors } from './setup-interceptors.ts'

export const httpClient = new Api({
  baseURL: API_URL,
})

setupInterceptors(httpClient)
