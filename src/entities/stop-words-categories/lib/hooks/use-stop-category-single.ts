import { useStopCategoriesList } from '@/entities/stop-words-categories'

export const useStopCategorySingle = (id?: number) => {
  const { data: categories = [], ...query } = useStopCategoriesList()

  const category = categories.find((c) => c.id === id)

  return {
    ...query,
    category,
  }
}
