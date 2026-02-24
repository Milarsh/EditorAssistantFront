import { createFileRoute } from '@tanstack/react-router'

import { PollIntervalSettings } from '@/pages/settings/ui/poll-interval-settings'

export const Route = createFileRoute('/_auth/settings/poll-inteval')({
  component: PollIntervalSettings,
})
