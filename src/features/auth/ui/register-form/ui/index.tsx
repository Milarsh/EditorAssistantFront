import { type FC, useState } from 'react'

import { useRegister } from '@/features/auth/lib/use-register'
import type {
  AuthRegisterConfirmRequest,
  AuthRegisterRequest,
} from '@/shared/api'
import { BaseForm } from '@/shared/ui/form-base'

import { useConfirmEmail } from '../../../lib/use-confirm-email'
import { renderConfirmForm, renderRegisterForm } from './lib/render'

const registerInitialValues: AuthRegisterRequest = {
  email: '',
  login: '',
  password: '',
  password_confirm: '',
}

interface RegisterFormProps {
  onRegisterSuccess?: () => void
}

export const RegisterForm: FC<RegisterFormProps> = ({ onRegisterSuccess }) => {
  const [step, setStep] = useState<'register' | 'confirm'>('register')
  const [confirmEmail, setConfirmEmail] = useState('')

  const { mutateAsync: register } = useRegister()
  const { mutateAsync: confirm } = useConfirmEmail()

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
      <BaseForm<AuthRegisterConfirmRequest>
        key="confirm"
        initialValues={{
          code: '',
          email: confirmEmail,
        }}
        onSubmit={handleConfirm}
        className="vertical gap-4"
        render={renderConfirmForm}
      />
    )
  }

  return (
    <BaseForm<AuthRegisterRequest>
      initialValues={registerInitialValues}
      onSubmit={handleRegister}
      className="vertical gap-4"
      render={renderRegisterForm}
    />
  )
}
