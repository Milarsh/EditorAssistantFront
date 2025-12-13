// entities/articles/model/articles-feed.use-articles-feed-store.ts
import { create } from 'zustand'

import { ArticlesListParamsOrderEnum } from '@/shared/api'

type ArticlesFeedState = {
  category: string
  search: string
  order: ArticlesListParamsOrderEnum

  setCategory: (v: string) => void
  setSearch: (v: string) => void
  toggleOrder: () => void
  reset: () => void
}

export const useArticlesFeedStore = create<ArticlesFeedState>((set) => ({
  category: 'all',
  search: '',
  order: ArticlesListParamsOrderEnum.Asc,

  setCategory: (category) => set({ category }),
  setSearch: (search) => set({ search }),
  toggleOrder: () =>
    set((s) => ({
      order:
        s.order === ArticlesListParamsOrderEnum.Asc
          ? ArticlesListParamsOrderEnum.Desc
          : ArticlesListParamsOrderEnum.Asc,
    })),

  reset: () =>
    set({
      category: 'all',
      search: '',
      order: ArticlesListParamsOrderEnum.Asc,
    }),
}))
