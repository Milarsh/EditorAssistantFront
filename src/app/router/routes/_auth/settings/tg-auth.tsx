import { createFileRoute } from '@tanstack/react-router'

import { TgAuthPage } from '@/pages/settings/ui/tg-auth'

export const Route = createFileRoute('/_auth/settings/tg-auth')({
  component: TgAuthPage,
})
