import { API_URL } from '../config'
import { Api } from './api'
import { setupInterceptors } from './lib'

export const httpClient = new Api({
  baseURL: API_URL,
})

setupInterceptors(httpClient)
