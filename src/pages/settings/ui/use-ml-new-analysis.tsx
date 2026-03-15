import { useCurrentSettings, useSettingsUpdate } from '@/features/settings'
import { SETTINGS_CODES } from '@/pages/settings/model'
import { ToggleSwitch } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper'

export const UseMlNewAnalysis = () => {
  const { data: currentSettings, isPending } = useCurrentSettings({
    codes: SETTINGS_CODES.USE_ML_NEWS_ANALYSIS,
  })

  const { mutateAsync: updateSettings } = useSettingsUpdate()

  const isChecked =
    typeof currentSettings?.[0].value === 'boolean'
      ? currentSettings?.[0].value
      : String(currentSettings?.[0].value).toLowerCase() === 'true'

  if (isPending) {
    return null
  }

  return (
    <SettingsCardWrapper title="Использование ML-модели для определения релевантности">
      <div className="flex gap-2">
        <ToggleSwitch
          checked={isChecked}
          onChange={() =>
            updateSettings({
              code: SETTINGS_CODES.USE_ML_NEWS_ANALYSIS,
              value: String(!isChecked),
            })
          }
        />
        <Typography>{isChecked ? 'Включено' : 'Выключено'}</Typography>
      </div>
    </SettingsCardWrapper>
  )
}
