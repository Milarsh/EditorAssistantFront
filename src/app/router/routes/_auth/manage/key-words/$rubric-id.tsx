import { createFileRoute } from '@tanstack/react-router'

import { KeyWordsCategoryId } from '@/pages/manage/ui/key-words/rubric-id'

export const Route = createFileRoute('/_auth/manage/key-words/$rubric-id')({
  component: KeyWordsCategoryId,
})
