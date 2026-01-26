import type { FormFieldConfig } from '@/shared/ui/form/ui'
import {
  CheckboxGroup,
  RadioGroup,
  SelectField,
  TextareaField,
  TextField,
  ToggleSwitch,
} from '@/shared/ui/input'

export const renderField = <T extends Record<string, any>>(
  field: FormFieldConfig<T>,
  values: T,
  handleChange: (name: string, value: any) => void,
) => {
  switch (field.type) {
    case 'text':
    case 'password':
      return (
        <TextField
          key={String(field.name)}
          {...field.props}
          type={field.type}
          value={values[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      )

    case 'textarea':
      return (
        <TextareaField
          key={String(field.name)}
          {...field.props}
          value={values[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      )

    case 'select':
      return (
        <SelectField
          key={field.name}
          {...field.props}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      )

    case 'toggle':
      return (
        <ToggleSwitch
          key={field.name}
          {...field.props}
          checked={values[field.name]}
          onChange={(value) => handleChange(field.name, value)}
        />
      )

    case 'radio':
      return (
        <RadioGroup
          key={field.name}
          {...field.props}
          value={values[field.name]}
          onChange={(value) => handleChange(field.name, value)}
        />
      )

    case 'checkbox':
      return (
        <CheckboxGroup
          key={field.name}
          {...field.props}
          value={values[field.name]}
          onChange={(newValues) => handleChange(field.name, newValues)}
        />
      )

    default:
      return null
  }
}
