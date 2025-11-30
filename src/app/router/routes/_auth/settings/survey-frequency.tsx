import { createFileRoute } from '@tanstack/react-router'

import { SurveyFrequencySettingsCard } from '@/pages/settings/ui/survey-frequency-settings-card'

export const Route = createFileRoute('/_auth/settings/survey-frequency')({
  component: SurveyFrequencySettingsCard,
})
