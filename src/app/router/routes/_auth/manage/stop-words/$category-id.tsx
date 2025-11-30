import { createFileRoute } from '@tanstack/react-router'

import { StopWordsCategoryId } from '@/pages/manage/ui/stop-words/category-id'

export const Route = createFileRoute('/_auth/manage/stop-words/$category-id')({
  component: StopWordsCategoryId,
})
