import { useQuery } from '@tanstack/react-query'

import type { ArticlesListParams } from '../model'
import { articlesListQueryKeys } from './article-query-leys'

export const useArticlesList = (params?: ArticlesListParams) =>
  useQuery({
    ...articlesListQueryKeys.list(params),
  })
