import { SettingsCardWrapper } from './settings-card-wrapper.tsx'

// const options = [
//   { label: 'До 5 МБ', value: '5' },
//   { label: 'До 10 МБ', value: '10' },
//   { label: 'До 25 МБ', value: '25' },
//   { label: 'До 50 МБ', value: '50' },
//   { label: 'До 100 МБ', value: '100' },
//   { label: 'Без ограничений', value: 'unlimited' },
//   { label: 'Настроить вручную', value: 'custom' },
// ]

export const MediaSettingsCard = () => {
  return (
    <SettingsCardWrapper title="Настройки медиафайлов">
      {/* <BaseForm */}
      {/*  className="mt-2" */}
      {/*  initialValues={{ */}
      {/*    saveMedia: false, */}
      {/*    selectedSize: '', */}
      {/*    customSize: '', */}
      {/*  }} */}
      {/*  onSubmit={() => {}} */}
      {/*  render={({ values, handleChange }) => ( */}
      {/*    <> */}
      {/*      /!* ToggleSwitch *!/ */}
      {/*      <ToggleSwitch */}
      {/*        checked={values.saveMedia} */}
      {/*        label="Сохранять медиафайлы" */}
      {/*        onChange={() => */}
      {/*          handleChange({ */}
      {/*            target: { */}
      {/*              name: 'saveMedia', */}
      {/*              value: (!values.saveMedia).toString(), */}
      {/*            }, */}
      {/*          } as any) */}
      {/*        } */}
      {/*      /> */}

      {/*      /!* Radio group *!/ */}
      {/*      <RadioGroup */}
      {/*        title="Максимальный размер видеофайла" */}
      {/*        value={values.selectedSize} */}
      {/*        onChange={(value) => */}
      {/*          handleChange({ */}
      {/*            target: { name: 'selectedSize', value }, */}
      {/*          } as any) */}
      {/*        } */}
      {/*        options={options} */}
      {/*        buttonsClass="mb-6 grid grid-cols-3 gap-y-3" */}
      {/*      /> */}

      {/*      /!* Custom size *!/ */}
      {/*      {values.selectedSize === 'custom' && ( */}
      {/*        <div className="flex items-center gap-2"> */}
      {/*          <input */}
      {/*            name="customSize" */}
      {/*            type="number" */}
      {/*            placeholder="1" */}
      {/*            value={values.customSize} */}
      {/*            onChange={handleChange} */}
      {/*            className="w-20 rounded-md border border-gray-300 px-2 py-1 */}
      {/*              text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" */}
      {/*          /> */}
      {/*          <span className="text-gray-700">МБ</span> */}
      {/*        </div> */}
      {/*      )} */}

      {/*      <Button size="xs" className="mt-4"> */}
      {/*        Сохранить изменения */}
      {/*      </Button> */}
      {/*    </> */}
      {/*  )} */}
      {/* /> */}
    </SettingsCardWrapper>
  )
}
