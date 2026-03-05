import { create } from 'zustand'

import type { ArticlesListParams } from '@/entities/articles/model'
import { ArticlesListParamsOrderEnum } from '@/shared/api'

type ArticlesFeedState = {
  filters: ArticlesListParams
}

type ArticlesFeedActions = {
  setFilters: (patch: Partial<ArticlesListParams>) => void
  reset: () => void
}

type ArticlesFeedStore = ArticlesFeedState & ArticlesFeedActions

export const initialState: ArticlesListParams = {
  limit: 25,
  offset: 0,
  source_id: undefined,
  q: '',
  date_from: undefined,
  date_to: undefined,
  order: ArticlesListParamsOrderEnum.Desc,
}

export const useArticlesFeedStore = create<ArticlesFeedStore>((set) => ({
  filters: initialState,
  setFilters: (patch) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...patch,
      },
    })),

  reset: () =>
    set({
      filters: { ...initialState },
    }),
}))
