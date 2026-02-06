import { type FormEvent, type ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

import type { ErrorApiPayload } from '@/shared/api/model'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

export interface FormValidationError {
  message?: string
  details?: Record<string, string>
}

type RenderFn<T> = (params: {
  values: T
  handleChange: <K extends keyof T>(name: K, value: T[K]) => void
  error: FormValidationError | ErrorApiPayload | null
}) => ReactNode

export interface BaseFormProps<T extends object> {
  initialValues: T
  onSubmit: (values: T) => Promise<void> | void
  successMessage?: string
  render: RenderFn<T>
  className?: string
  fieldsError?: ErrorApiPayload | null
  submitText?: string
  customSubmitComponent?: ReactNode
  formTitle?: ReactNode
}

export const FormRoot = <T extends object>({
  initialValues,
  onSubmit,
  render,
  className,
  fieldsError = null,
  submitText = 'Отправить',
  customSubmitComponent,
  formTitle,
  successMessage = 'Успех!',
}: BaseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = <K extends keyof T>(name: K, value: T[K]) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await onSubmit(values)
    toast.success(successMessage)
    setValues(initialValues)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {formTitle}
      {render({
        values,
        handleChange,
        error: fieldsError,
      })}
      {fieldsError?.message && (
        <Typography variant="error" className="text-center">
          {fieldsError.message}
        </Typography>
      )}
      {customSubmitComponent ?? <Button type="submit">{submitText}</Button>}
    </form>
  )
}
