import { createQueryKeys } from '@lukemorales/query-key-factory'

import type { RequestParams } from '@/shared/api'
import { httpClient } from '@/shared/api/http-client'

import type { ArticlesListParams } from '../model'

export const articlesQueryKeys = createQueryKeys('article', {
  list: (params?: ArticlesListParams) => ({
    queryKey: ['articles', params],
    queryFn: () => httpClient.api.articlesList(params).then((res) => res.data),
  }),
  details: (id: number, params?: RequestParams) => ({
    queryKey: [`details`, id],
    queryFn: () =>
      httpClient.api.articlesDetail(id, params).then((res) => res.data),
  }),
  stats: (id: number, params?: RequestParams) => ({
    queryKey: [`stats`, id],
    queryFn: () =>
      httpClient.api.articlesStatsList(id, params).then((res) => res.data),
  }),
  media: (id: number, params?: RequestParams) => ({
    queryKey: [`media`, id],
    queryFn: () =>
      httpClient.api.articlesMediaList(id, params).then((res) => res.data),
  }),
})
