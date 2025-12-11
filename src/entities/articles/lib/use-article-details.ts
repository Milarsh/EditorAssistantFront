import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { articlesListQueryKeys } from './article-query-leys'

export const useArticleDetails = (id: number, params?: RequestParams) =>
  useQuery({
    ...articlesListQueryKeys.details(id, params),
  })
