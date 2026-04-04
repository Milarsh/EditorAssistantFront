import type { Source } from '@/shared/api'

export const getSourcesListByType = (sources: Source[]) => {
  return sources?.reduce<Record<string, Source[]>>(
    (acc, source) => {
      acc.all.push(source)

      if (!acc[source.type]) {
        acc[source.type] = []
      }

      acc[source.type].push(source)

      return acc
    },
    { all: [] },
  )
}
