import { type FC, useState } from 'react'

import type {
  AuthRegisterConfirmRequest,
  AuthRegisterRequest,
} from '@/shared/api'
import { Button } from '@/shared/ui/button'
import type { FormValidationError } from '@/shared/ui/form'
import { FormBuilder } from '@/shared/ui/form'

import { confirmFormFieldsConfig, registerFormFieldsConfig } from '../../config'
import { useConfirmEmail } from '../lib/use-confirm-email'
import { useRegister } from '../lib/use-register'

const PASSWORD_RULE = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,}$/
const PASSWORD_ERROR =
  'Пароль должен содержать не менее 8 символов и состоять из латинских букв и цифр'
const PASSWORD_MISMATCH = 'Пароли не совпадают'
const PASSWORD_HINT =
  '*Пароль должен содержать не менее 8 символов и состоять из латинских букв и цифр'

const validateRegisterForm = (
  values: AuthRegisterRequest,
): FormValidationError | null => {
  const details: Record<string, string> = {}

  if (!PASSWORD_RULE.test(values.password)) {
    details.password = PASSWORD_ERROR
  }
  if (values.password !== values.password_confirm) {
    details.password_confirm = PASSWORD_MISMATCH
  }
  if (Object.keys(details).length === 0) {
    return null
  }

  return { details }
}

const registerInitialValues: AuthRegisterRequest = {
  email: '',
  login: '',
  password: '',
  password_confirm: '',
}

const getConfirmInitValues = (email: string) => ({
  code: '',
  email,
})

interface RegisterFormProps {
  onRegisterSuccess?: () => void
}

export const RegisterForm: FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  const [step, setStep] = useState<'register' | 'confirm'>('register')
  const [confirmEmail, setConfirmEmail] = useState('')

  const { mutateAsync: register, normalizedError: registerNormalizedError } =
    useRegister()
  const { mutateAsync: confirm, normalizedError: confirmNormalizedError } =
    useConfirmEmail()

  const handleRegister = async (data: AuthRegisterRequest) => {
    await register(data)

    setConfirmEmail(data.email)
    setStep('confirm')
  }

  const handleConfirm = async (confirmRequest: AuthRegisterConfirmRequest) => {
    const {
      data: { status },
    } = await confirm(confirmRequest)

    if (status === 'confirmed') {
      onRegisterSuccess?.()
    }
  }

  if (step === 'confirm') {
    return (
      <FormBuilder<AuthRegisterConfirmRequest>
        formError={confirmNormalizedError}
        fields={confirmFormFieldsConfig}
        initialValue={getConfirmInitValues(confirmEmail)}
        onSubmit={handleConfirm}
        fieldClassName="w-full bg-[#E2E7EDB2] border-none"
      />
    )
  }

  return (
    <FormBuilder<AuthRegisterRequest>
      formError={registerNormalizedError}
      fields={registerFormFieldsConfig}
      initialValue={registerInitialValues}
      onSubmit={handleRegister}
      validate={validateRegisterForm}
      fieldClassName="w-full bg-[#E2E7EDB2] border-none"
      customSubmitComponent={
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-neutral-300">{PASSWORD_HINT}</span>
          <Button type="submit" className="w-[238px] bg-blue-500">
            Регистрация
          </Button>
        </div>
      }
    />
  )
}
