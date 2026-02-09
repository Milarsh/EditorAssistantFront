import { useSettingsOptionSingle, useSettingsUpdate } from '@/features/settings'
import { SETTINGS_CODES } from '@/pages/settings/model'
import type { SettingUpdate } from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper'

export const PollIntervalSettings = () => {
  const { data: setting, isLoading } = useSettingsOptionSingle(
    SETTINGS_CODES.POLL_INTERVAL,
  )

  const { mutateAsync: updateSettings, normalizedError } = useSettingsUpdate()

  if (isLoading || !setting) {
    return null
  }

  const options =
    setting.options?.map((option) => ({
      label: `${option} минут`,
      value: String(option),
    })) || []

  return (
    <SettingsCardWrapper title="Периодичность опроса источников">
      <FormBuilder<SettingUpdate>
        formError={normalizedError}
        fields={[
          {
            type: 'radio',
            name: 'value',
            props: {
              options,
              value: String(setting.default),
              textField: {
                title: 'Настроить вручную',
                afterInputSlot: <Typography variant="footnote">мин</Typography>,
              },
            },
          },
        ]}
        initialValue={{
          code: SETTINGS_CODES.POLL_INTERVAL,
          value: String(setting.default),
        }}
        onSubmit={(data) => updateSettings(data)}
        submitText="Сохранить изменения"
      />
    </SettingsCardWrapper>
  )
}
