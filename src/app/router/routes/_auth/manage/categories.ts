import { createFileRoute } from '@tanstack/react-router'

import { CategoriesManager } from '@/pages/manage'

export const Route = createFileRoute('/_auth/manage/categories')({
  component: CategoriesManager,
})
