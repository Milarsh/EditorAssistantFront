import { createFileRoute } from '@tanstack/react-router'

import { KeyWordsCategoryId } from '@/pages/manage/ui/key-words/category-id'

export const Route = createFileRoute('/_auth/manage/key-words/$category-id')({
  component: KeyWordsCategoryId,
})
