import { createFileRoute } from '@tanstack/react-router'

import { UseMlNewAnalysis } from '@/pages/settings/ui/use-ml-new-analysis'

export const Route = createFileRoute('/_auth/settings/use-ml-news-analysis')({
  component: UseMlNewAnalysis,
})
