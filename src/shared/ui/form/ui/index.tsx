import type { ComponentProps, ReactNode } from 'react'

import type { ErrorApiPayload } from '@/shared/api/model'
import {
  CheckboxGroup,
  RadioGroup,
  SelectField,
  TextField,
  ToggleSwitch,
} from '@/shared/ui/input'
import { DatePicker } from '@/shared/ui/input/date-picker'
import { TextareaField } from '@/shared/ui/input/text-area'
import { Typography } from '@/shared/ui/typography'

import { renderField } from '../config'
import { FormRoot, type FormValidationError } from './form-root'

export type { FormValidationError } from './form-root'
export const fieldRegistry = {
  text: TextField,
  password: TextField,
  textarea: TextareaField,
  select: SelectField,
  toggle: ToggleSwitch,
  radio: RadioGroup,
  checkbox: CheckboxGroup,
  date: DatePicker,
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
    onValueChange?: (value: string) => void | Promise<void>
    hint?: ReactNode
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
  resetAfterSubmit?: boolean
  fieldClassName?: string
  validate?: (values: T) => FormValidationError | null
}

export const FormBuilder = <T extends Record<string, any>>({
  fields,
  initialValue,
  onSubmit,
  formError,
  submitText,
  customSubmitComponent,
  formTitle,
  resetAfterSubmit,
  fieldClassName,
  validate,
}: FormBuilderProps<T>) => {
  return (
    <FormRoot<T>
      formTitle={formTitle}
      className="vertical w-full gap-2"
      initialValues={initialValue}
      onSubmit={onSubmit}
      fieldsError={formError}
      customSubmitComponent={customSubmitComponent}
      submitText={submitText}
      resetAfterSubmit={resetAfterSubmit}
      validate={validate}
      render={({ handleChange, values, error }) =>
        fields.map((field) => (
          <div key={field.name} className="w-full">
            <div className="vertical gap-2">
              {field?.title}
              {renderField<T>(field, values, handleChange, fieldClassName)}
              {field?.hint && (
                <span className="text-sm text-neutral-400">{field.hint}</span>
              )}
              {error?.details?.[field.name] && (
                <Typography variant="error">
                  {error.details[field.name]}
                </Typography>
              )}
            </div>
          </div>
        ))
      }
    />
  )
}
