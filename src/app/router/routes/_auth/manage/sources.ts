import { createFileRoute } from '@tanstack/react-router'

import { SourcePage } from '@/pages/manage/ui/sources'

export const Route = createFileRoute('/_auth/manage/sources')({
  component: SourcePage,
})
