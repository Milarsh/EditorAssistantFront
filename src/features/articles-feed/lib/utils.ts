import { httpClient } from '@/shared/api'

export const handleExportExcel = async () => {
  try {
    const response = await httpClient.api.articlesExportList({ format: 'blob' })

    const blob =
      response.data instanceof Blob
        ? response.data
        : new Blob([response.data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          })

    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')

    a.href = url
    a.download = 'articles.xlsx'
    a.click()

    URL.revokeObjectURL(url)
  } catch (error) {
    // eslint-disable-next-line
    console.error(error)
  }
}

const DAY_MS = 1000 * 60 * 60 * 24

const RANGE_MAP: Record<number, DateRange> = {
  3: '3d',
  5: '5d',
  7: '7d',
  14: '14d',
}

export const resolveDateRange = (
  date_from?: string,
  date_to?: string,
): DateRange | undefined => {
  if (!date_from || !date_to) {
    return undefined
  }

  const from = new Date(date_from)
  const to = new Date(date_to)

  const diffDays = Math.floor((to.getTime() - from.getTime()) / DAY_MS)

  if (diffDays === 0) {
    return 'today'
  }

  return RANGE_MAP[diffDays]
}

export type DateRange = 'today' | '3d' | '5d' | '7d' | '14d'

export const buildDateInterval = (
  range?: DateRange,
): { date_from: string; date_to: string } | undefined => {
  if (!range) {
    return undefined
  }

  const now = new Date()
  const from = new Date()

  switch (range) {
    case 'today':
      from.setHours(0, 0, 0, 0)
      break
    case '3d':
      from.setDate(now.getDate() - 3)
      break
    case '5d':
      from.setDate(now.getDate() - 5)
      break
    case '7d':
      from.setDate(now.getDate() - 7)
      break
    case '14d':
      from.setDate(now.getDate() - 14)
      break
    default:
      return undefined
  }

  return {
    date_from: from.toISOString(),
    date_to: now.toISOString(),
  }
}
