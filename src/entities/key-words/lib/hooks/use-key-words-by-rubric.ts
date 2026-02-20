import { useKeyWordsList } from './use-key-words-list'

export const useKeyWordsByRubric = (rubricId?: number) => {
  const { data: stopWords = [] } = useKeyWordsList()

  return rubricId ? stopWords.filter((w) => w.rubric_id === rubricId) : []
}
