import { createFileRoute } from '@tanstack/react-router'

import { MediaSettingsCard } from '@/pages/settings/ui/media-settings-card'

export const Route = createFileRoute('/_auth/settings/mediafiles')({
  component: MediaSettingsCard,
})
