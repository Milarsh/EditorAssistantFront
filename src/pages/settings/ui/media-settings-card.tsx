import { useSettingsOptionSingle, useSettingsUpdate } from '@/features/settings'
import { SETTINGS_CODES } from '@/pages/settings/model'
import type { SettingUpdate } from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper.tsx'

export const MediaSettingsCard = () => {
  const { data: setting, isLoading } = useSettingsOptionSingle(
    SETTINGS_CODES.MEDIA_MAX_SIZE,
  )

  const { mutateAsync: updateSettings, normalizedError } = useSettingsUpdate()

  if (isLoading || !setting) {
    return null
  }

  const options =
    setting.options?.map((option) => ({
      label: `${option} мб`,
      value: String(option),
    })) || []

  return (
    <SettingsCardWrapper title="Настройки медиафайлов">
      <FormBuilder<SettingUpdate>
        formError={normalizedError}
        fields={[
          {
            type: 'radio',
            name: 'value',
            title: (
              <Typography variant="body">
                Максимальный размер видеофайла:
              </Typography>
            ),
            props: {
              options,
              value: String(setting.default),
              textField: {
                title: 'Настроить вручную',
                afterInputSlot: <Typography variant="footnote">МБ</Typography>,
              },
            },
          },
        ]}
        initialValue={{
          code: SETTINGS_CODES.MEDIA_MAX_SIZE,
          value: String(setting.default),
        }}
        onSubmit={(data) => updateSettings(data)}
        submitText="Сохранить изменения"
      />
    </SettingsCardWrapper>
  )
}
