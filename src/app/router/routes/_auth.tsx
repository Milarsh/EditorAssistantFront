import { createFileRoute, Outlet } from '@tanstack/react-router'

import { authGuard } from '@/features/auth/lib/auth-guard'

export const Route = createFileRoute('/_auth')({
  beforeLoad: authGuard,
  component: () => <Outlet />,
})
