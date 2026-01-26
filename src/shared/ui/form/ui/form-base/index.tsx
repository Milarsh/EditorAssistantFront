import { type FormEvent, type ReactNode, useState } from 'react'

import type { ErrorApiPayload } from '@/shared/api/model'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

type RenderFn<T> = (params: {
  values: T
  // handleChange: (name: string, value: string | boolean | string[]) => void
  handleChange: <K extends keyof T>(name: K, value: T[K]) => void
  error: ErrorApiPayload | null
}) => ReactNode

export interface BaseFormProps<T extends object> {
  initialValues: T
  onSubmit: (values: T) => void
  render: RenderFn<T>
  className?: string
  fieldsError?: ErrorApiPayload | null
  submitText?: string
  customSubmitComponent?: ReactNode
}

export const BaseForm = <T extends object>({
  initialValues,
  onSubmit,
  render,
  className,
  fieldsError = null,
  submitText = 'Отправить',
  customSubmitComponent,
}: BaseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = <K extends keyof T>(name: K, value: T[K]) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {render({ values, handleChange, error: fieldsError })}
      {fieldsError?.message && (
        <Typography variant="error" className="text-center">
          {fieldsError.message}
        </Typography>
      )}
      {customSubmitComponent ?? <Button type="submit">{submitText}</Button>}
    </form>
  )
}
