import type { ComponentProps, InputHTMLAttributes } from 'react'

import type { FormFieldConfig } from '@/shared/ui/form/ui'
import {
  CheckboxGroup,
  DatePicker,
  RadioGroup,
  SelectField,
  TextareaField,
  TextField,
  ToggleSwitch,
} from '@/shared/ui/input'

const mergeClassName = (
  props: { className?: string },
  fieldClassName?: string,
): string | undefined => {
  if (!fieldClassName) {
    return props.className
  }

  return [props.className, fieldClassName].filter(Boolean).join(' ')
}

export const renderField = <T extends Record<string, any>>(
  field: FormFieldConfig<T>,
  values: T,
  handleChange: (name: string, value: any) => void,
  fieldClassName?: string,
) => {
  switch (field.type) {
    case 'text':
    case 'password': {
      const props = field.props as InputHTMLAttributes<HTMLInputElement>

      return (
        <TextField
          key={String(field.name)}
          {...props}
          className={mergeClassName(props, fieldClassName)}
          type={field.type}
          value={values[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      )
    }

    case 'textarea': {
      const props = field.props as ComponentProps<typeof TextareaField>

      return (
        <TextareaField
          key={String(field.name)}
          {...props}
          className={mergeClassName(props, fieldClassName)}
          value={values[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      )
    }

    case 'select': {
      const props = field.props as ComponentProps<typeof SelectField>

      return (
        <SelectField
          key={field.name}
          {...props}
          className={mergeClassName(props, fieldClassName)}
          value={values[field.name]}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      )
    }

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
    case 'date':
      return (
        <DatePicker
          key={field.name}
          {...field.props}
          value={values[field.name]}
          onChange={(value) => {
            field?.onValueChange?.(value)
            handleChange(field.name, value)
          }}
        />
      )

    default:
      return null
  }
}
