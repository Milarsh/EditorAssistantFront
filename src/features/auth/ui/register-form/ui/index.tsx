import { type FC, useState } from 'react'

import type {
  AuthRegisterConfirmRequest,
  AuthRegisterRequest,
} from '@/shared/api'
import { FormBuilder } from '@/shared/ui/form'

import { confirmFormFieldsConfig, registerFormFieldsConfig } from '../../config'
import { useConfirmEmail } from '../lib/use-confirm-email'
import { useRegister } from '../lib/use-register'

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
      />
    )
  }

  return (
    <FormBuilder<AuthRegisterRequest>
      formError={registerNormalizedError}
      fields={registerFormFieldsConfig}
      initialValue={registerInitialValues}
      onSubmit={handleRegister}
    />
  )
}
