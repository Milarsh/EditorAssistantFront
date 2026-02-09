import {
  useCurrentSettings,
  useSettingsOptionSingle,
  useSettingsUpdate,
} from '@/features/settings'
import { SETTINGS_CODES } from '@/pages/settings/model'
import type { SettingUpdate } from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'
import { ToggleSwitch } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper.tsx'

const MediaKeepToggle = () => {
  const { data: currentMediaKeepSettings, isPending } = useCurrentSettings({
    codes: SETTINGS_CODES.MEDIA_KEEP,
  })

  const { mutateAsync: updateSettings } = useSettingsUpdate()

  const isChecked =
    typeof currentMediaKeepSettings?.[0].value === 'boolean'
      ? currentMediaKeepSettings?.[0].value
      : String(currentMediaKeepSettings?.[0].value).toLowerCase() === 'true'

  if (isPending) {
    return null
  }

  return (
    <div className="flex gap-4">
      <ToggleSwitch
        checked={isChecked}
        onChange={() =>
          updateSettings({
            code: SETTINGS_CODES.MEDIA_KEEP,
            value: String(!isChecked),
          })
        }
      />
      <Typography>Сохранять медиафайлы</Typography>
    </div>
  )
}

export const MediaSettingsCard = () => {
  const { data: mediaMaxSizeSettingsOptions, isPending } =
    useSettingsOptionSingle(SETTINGS_CODES.MEDIA_MAX_SIZE)

  const { data: currentMaxSizeSettings, isPending: isCurrentMaxSizePending } =
    useCurrentSettings({
      codes: SETTINGS_CODES.MEDIA_MAX_SIZE,
    })

  const { mutateAsync: updateSettings, normalizedError } = useSettingsUpdate()

  if (
    !mediaMaxSizeSettingsOptions &&
    isPending &&
    isCurrentMaxSizePending &&
    !currentMaxSizeSettings
  ) {
    return null
  }

  const options =
    mediaMaxSizeSettingsOptions?.options?.map((option) => ({
      label: `${option} мб`,
      value: String(option),
    })) || []

  return (
    <SettingsCardWrapper title="Настройки медиафайлов">
      <MediaKeepToggle />
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
              textField: {
                title: 'Настроить вручную',
                afterInputSlot: <Typography variant="footnote">МБ</Typography>,
              },
            },
          },
        ]}
        initialValue={{
          code: SETTINGS_CODES.MEDIA_MAX_SIZE,
          value: currentMaxSizeSettings?.[0].value || '',
        }}
        onSubmit={(data) => updateSettings(data)}
        submitText="Сохранить изменения"
      />
    </SettingsCardWrapper>
  )
}
