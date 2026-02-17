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
