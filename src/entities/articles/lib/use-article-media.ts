import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { articlesQueryKeys } from './article-query-keys.ts'

export const useArticleMedia = (id: number, params?: RequestParams) =>
  useQuery({
    ...articlesQueryKeys.media(id, params),
  })
