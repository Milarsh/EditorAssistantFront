import { useSourcesList } from './use-sources-list'

export const useSourceById = (sourceId?: number) => {
  const { data: stopWords = [] } = useSourcesList()

  return stopWords.find((source) => source.id === sourceId)
}
