import { createFileRoute } from '@tanstack/react-router'

import { PersonalPage } from '@/pages/personal'

export const Route = createFileRoute('/_auth/personal')({
  component: PersonalPage,
})
