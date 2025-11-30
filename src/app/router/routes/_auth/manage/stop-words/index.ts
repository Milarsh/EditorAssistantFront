import { createFileRoute } from '@tanstack/react-router'

import { StopWordsManager } from '@/pages/manage'

export const Route = createFileRoute('/_auth/manage/stop-words/')({
  component: StopWordsManager,
})
