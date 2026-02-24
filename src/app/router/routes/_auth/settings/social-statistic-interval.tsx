import { createFileRoute } from '@tanstack/react-router'

import { SocialStatisticInterval } from '@/pages/settings/ui/social-statistic-interval'

export const Route = createFileRoute(
  '/_auth/settings/social-statistic-interval',
)({
  component: SocialStatisticInterval,
})
