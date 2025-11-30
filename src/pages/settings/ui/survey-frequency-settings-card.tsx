import { Button } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/form-base'
import { RadioGroup } from '@/shared/ui/input'

import { SettingsCardWrapper } from './settings-card-wrapper'

const options = [
  { label: 'До 5 МБ', value: '5' },
  { label: 'До 10 МБ', value: '10' },
  { label: 'До 25 МБ', value: '25' },
  { label: 'До 50 МБ', value: '50' },
  { label: 'До 100 МБ', value: '100' },
  { label: 'Без ограничений', value: 'unlimited' },
  { label: 'Настроить вручную', value: 'custom', withTextField: true },
]

export const SurveyFrequencySettingsCard = () => {
  return (
    <SettingsCardWrapper title="Периодичность опроса источников">
      <BaseForm
        className="mt-2"
        initialValues={{
          saveMedia: false,
          selectedSize: '',
          customSize: '',
        }}
        onSubmit={() => {}}
        render={({ values, handleChange }) => (
          <>
            <RadioGroup
              value={values.selectedSize}
              onChange={(value) =>
                handleChange({
                  target: { name: 'selectedSize', value },
                } as any)
              }
              options={options}
              buttonsClass="mb-6 grid grid-cols-3 gap-y-3"
            />

            <Button size="xs" className="mt-4">
              Сохранить изменения
            </Button>
          </>
        )}
      />
    </SettingsCardWrapper>
  )
}
