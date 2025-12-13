import { useQuery } from '@tanstack/react-query'

import type { ArticlesListParams } from '../model'
import { articlesQueryKeys } from './article-query-keys.ts'

export const useArticlesList = (params?: ArticlesListParams) =>
  useQuery({
    ...articlesQueryKeys.list(params),
  })
