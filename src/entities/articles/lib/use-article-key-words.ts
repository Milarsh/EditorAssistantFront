import { useQuery } from '@tanstack/react-query'

import type { RequestParams } from '@/shared/api'

import { articlesQueryKeys } from './article-query-keys.ts'

export const useArticleKeyWords = (id: number, params?: RequestParams) =>
  useQuery({
    ...articlesQueryKeys.keyWords(id, params),
  })
