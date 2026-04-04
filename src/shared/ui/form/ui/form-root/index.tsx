import { type FormEvent, type ReactNode, useEffect, useState } from 'react'
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
  resetAfterSubmit?: boolean
  validate?: (values: T) => FormValidationError | null
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
  resetAfterSubmit = true,
  validate,
}: BaseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues)
  const [validationError, setValidationError] =
    useState<FormValidationError | null>(null)

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  const handleChange = <K extends keyof T>(name: K, value: T[K]) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
    setValidationError(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const clientError = validate?.(values) ?? null

    if (clientError?.details && Object.keys(clientError.details).length > 0) {
      setValidationError(clientError)

      return
    }
    setValidationError(null)
    await onSubmit(values)
    toast.success(successMessage)
    if (resetAfterSubmit) {
      setValues(initialValues)
    }
  }

  const error = validationError ?? fieldsError

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="text-lg">{formTitle}</div>
      {render({
        values,
        handleChange,
        error,
      })}
      {error?.message && (
        <Typography variant="error" className="text-center">
          {error.message}
        </Typography>
      )}
      {customSubmitComponent ?? (
        <Button type="submit" className="bg-blue-500">
          {submitText}
        </Button>
      )}
    </form>
  )
}
