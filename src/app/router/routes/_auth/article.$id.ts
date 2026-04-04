import { createFileRoute } from '@tanstack/react-router'

import { ArticlePage } from '@/pages/article'

export const Route = createFileRoute('/_auth/article/$id')({
  component: ArticlePage,
})
