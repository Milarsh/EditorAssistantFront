import { createFileRoute } from '@tanstack/react-router'

import { SourcesManager } from '@/pages/manage'

export const Route = createFileRoute('/_auth/manage/sources')({
  component: SourcesManager,
})
