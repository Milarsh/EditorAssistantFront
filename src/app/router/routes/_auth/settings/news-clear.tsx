import { createFileRoute } from '@tanstack/react-router'

import { NewsClearSettingsCard } from '@/pages/settings/ui/news-clear-settings-card'

export const Route = createFileRoute('/_auth/settings/news-clear')({
  component: NewsClearSettingsCard,
})
