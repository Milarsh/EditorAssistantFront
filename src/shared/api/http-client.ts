import { API_URL } from '../config'
import { Api } from './api'

export const httpClient = new Api({
  baseURL: API_URL,
})
