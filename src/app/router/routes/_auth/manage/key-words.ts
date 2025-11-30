import { createFileRoute } from '@tanstack/react-router'

import { KeyWordsManager } from '@/pages/manage'

export const Route = createFileRoute('/_auth/manage/key-words')({
  component: KeyWordsManager,
})
