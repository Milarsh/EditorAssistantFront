import type { ComponentProps, ReactNode } from 'react'

import type { ErrorApiPayload } from '@/shared/api/model'
import {
  CheckboxGroup,
  RadioGroup,
  SelectField,
  TextField,
  ToggleSwitch,
} from '@/shared/ui/input'
import { TextareaField } from '@/shared/ui/input/text-area'
import { Typography } from '@/shared/ui/typography'

import { renderField } from '../config'
import { FormRoot } from './form-root'

export const fieldRegistry = {
  text: TextField,
  password: TextField,
  textarea: TextareaField,
  select: SelectField,
  toggle: ToggleSwitch,
  radio: RadioGroup,
  checkbox: CheckboxGroup,
}

type FieldRegistry = typeof fieldRegistry
type ControlledFieldProps<T> = Omit<T, 'value'> & {
  value?: T extends { value: infer V } ? V : never
}

export type FieldPropsByType<T extends keyof FieldRegistry> =
  ControlledFieldProps<ComponentProps<FieldRegistry[T]>>

export type FormFieldConfig<T> = {
  [K in keyof FieldRegistry]: {
    title?: ReactNode
    type: K
    name: Extract<keyof T, string>
    props: FieldPropsByType<K>
  }
}[keyof FieldRegistry]

interface FormBuilderProps<T> {
  fields: FormFieldConfig<T>[]
  initialValue: T
  onSubmit: (data: T) => void
  formError?: ErrorApiPayload | null
  submitText?: string
  customSubmitComponent?: ReactNode
  formTitle?: ReactNode
}

export const FormBuilder = <T extends Record<string, any>>({
  fields,
  initialValue,
  onSubmit,
  formError,
  submitText,
  customSubmitComponent,
  formTitle,
}: FormBuilderProps<T>) => {
  return (
    <FormRoot<T>
      formTitle={formTitle}
      className="vertical gap-2"
      initialValues={initialValue}
      onSubmit={onSubmit}
      fieldsError={formError}
      customSubmitComponent={customSubmitComponent}
      submitText={submitText}
      render={({ handleChange, values, error }) =>
        fields.map((field) => (
          <div key={field.name}>
            <div className="vertical gap-2">
              {field?.title}
              {renderField<T>(field, values, handleChange)}
              {error?.details?.[field.name] && (
                <Typography variant="error">
                  {error?.details?.[field.name]}
                </Typography>
              )}
            </div>
          </div>
        ))
      }
    />
  )
}
