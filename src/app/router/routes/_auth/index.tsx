import { createFileRoute } from '@tanstack/react-router'

import { authGuard } from '@/features/auth/lib/auth-guard'
import { MainPage } from '@/pages'

export const Route = createFileRoute('/_auth/')({
  beforeLoad: authGuard,
  component: MainPage,
})
