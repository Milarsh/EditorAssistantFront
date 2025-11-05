import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useState,
} from 'react'

export interface BaseFormProps<T extends object> {
  initialValues: T
  onSubmit: (values: T) => void
  render: (params: {
    values: T
    handleChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void
  }) => ReactNode
  className?: string
}

export const BaseForm = <T extends object>({
  initialValues,
  onSubmit,
  render,
  className,
}: BaseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(values)
    setValues(initialValues)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {render({ values, handleChange })}
    </form>
  )
}
