import { createFileRoute } from '@tanstack/react-router'

import { StopCategoriesManager } from '@/pages/manage'

export const Route = createFileRoute('/_auth/manage/stop-words/')({
  component: StopCategoriesManager,
})
