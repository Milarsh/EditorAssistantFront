import {
  useCurrentSettings,
  useSettingsOptionSingle,
  useSettingsUpdate,
} from '@/features/settings'
import { SETTINGS_CODES } from '@/pages/settings/model'
import { type SettingUpdate } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { FormBuilder } from '@/shared/ui/form'
import { Typography } from '@/shared/ui/typography'

import { SettingsCardWrapper } from './settings-card-wrapper'

export const PollIntervalSettings = () => {
  const { data: setting, isLoading } = useSettingsOptionSingle(
    SETTINGS_CODES.POLL_INTERVAL,
  )

  const { mutateAsync: updateSettings, normalizedError } = useSettingsUpdate()

  const {
    data: currentPollIntervalSettings,
    isPending: isCurrentPollIntervalPending,
  } = useCurrentSettings({
    codes: SETTINGS_CODES.POLL_INTERVAL,
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
    <SettingsCardWrapper title="Периодичность опроса источников">
      <FormBuilder<SettingUpdate>
        formError={normalizedError}
        resetAfterSubmit={false}
        fields={[
          {
            type: 'radio',
            name: 'value',
            props: {
              options,
              buttonsClass: 'grid grid-cols-2 gap-2',
              textField: {
                title: 'Настроить вручную',
                afterInputSlot: <Typography variant="footnote">мин</Typography>,
              },
            },
          },
        ]}
        initialValue={{
          code: SETTINGS_CODES.POLL_INTERVAL,
          value: currentPollIntervalSettings?.[0].value || '',
        }}
        onSubmit={(data) => updateSettings(data)}
        customSubmitComponent={
          <div className="flex justify-end">
            <Button
              type="submit"
              size="xs"
              className="flex h-8 w-40 items-center justify-center bg-blue-500"
            >
              Сохранить изменения
            </Button>
          </div>
        }
      />
    </SettingsCardWrapper>
  )
}
