import { useStopWordsList } from './use-stop-words-list'

export const useStopWordsByCategory = (categoryId?: number) => {
  const { data: stopWords = [] } = useStopWordsList()

  return categoryId ? stopWords.filter((w) => w.category_id === categoryId) : []
}
