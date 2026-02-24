import {
  useCurrentSettings,
  useSettingsOptionSingle,
  useSettingsUpdate,
} from '@/features/settings'
import { SETTINGS_CODES } from '@/pages/settings/model'
import { type SettingUpdate } from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper'

export const SocialStatisticInterval = () => {
  const { data: setting, isLoading } = useSettingsOptionSingle(
    SETTINGS_CODES.SOCIAL_STATS_INTERVAL,
  )

  const { mutateAsync: updateSettings, normalizedError } = useSettingsUpdate()

  const {
    data: currentSocialStatsSettings,
    isPending: isCurrentPollIntervalPending,
  } = useCurrentSettings({
    codes: SETTINGS_CODES.SOCIAL_STATS_INTERVAL,
  })

  if (isLoading || !setting || isCurrentPollIntervalPending) {
    return null
  }

  const options =
    setting.options?.map((option) => ({
      label: `${option} минут`,
      value: String(option),
    })) || []

  return (
    <SettingsCardWrapper title="Периодичность сбора статистики по новостям">
      <FormBuilder<SettingUpdate>
        formError={normalizedError}
        resetAfterSubmit={false}
        fields={[
          {
            type: 'radio',
            name: 'value',
            props: {
              options,
              textField: {
                title: 'Настроить вручную',
                afterInputSlot: <Typography variant="footnote">мин</Typography>,
              },
            },
          },
        ]}
        initialValue={{
          code: SETTINGS_CODES.SOCIAL_STATS_INTERVAL,
          value: currentSocialStatsSettings?.[0].value || '',
        }}
        onSubmit={(data) => updateSettings(data)}
        submitText="Сохранить изменения"
      />
    </SettingsCardWrapper>
  )
}
