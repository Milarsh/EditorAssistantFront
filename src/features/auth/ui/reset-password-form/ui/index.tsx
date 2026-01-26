import { type FC, useState } from 'react'

import { useResetPassword } from '@/features/auth/ui/reset-password-form/lib/use-reset-password'
import { useSendEmail } from '@/features/auth/ui/reset-password-form/lib/use-send-email'
import {
  type PasswordResetRequest,
  type PasswordSendCodeRequest,
} from '@/shared/api'
import { FormWrapper } from '@/shared/ui/form/ui'

import {
  passwordSendCodeFormFieldsConfig,
  resetPasswordFormFieldsConfig,
} from '../config'

const passwordSendCodeInitValues: PasswordSendCodeRequest = {
  email: '',
}

const getPasswordResetInitValues = (email: string): PasswordResetRequest => ({
  code: '',
  email,
  new_password: '',
  new_password_confirm: '',
})

interface ResetPasswordFormProps {
  onResetSuccess?: () => void
}

export const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
  onResetSuccess,
}) => {
  const [step, setStep] = useState<'send_email' | 'set_new_password'>(
    'send_email',
  )
  const [confirmEmail, setConfirmEmail] = useState('')

  const { mutateAsync: sendEmail, normalizedError: sendEmailNormalizedError } =
    useSendEmail()
  const {
    mutateAsync: resetPassword,
    normalizedError: resetPasswordNormalizedError,
  } = useResetPassword()

  const handleSendEmail = async (data: PasswordSendCodeRequest) => {
    await sendEmail(data)

    setConfirmEmail(data.email)
    setStep('set_new_password')
  }

  const handleResetPassword = async (confirmRequest: PasswordResetRequest) => {
    const {
      data: { status },
    } = await resetPassword(confirmRequest)

    if (status === 'password_changed') {
      onResetSuccess?.()
    }
  }

  if (step === 'set_new_password') {
    return (
      <FormWrapper<PasswordResetRequest>
        formError={resetPasswordNormalizedError}
        fields={resetPasswordFormFieldsConfig}
        initialValue={getPasswordResetInitValues(confirmEmail)}
        onSubmit={handleResetPassword}
      />
    )
  }

  return (
    <FormWrapper<PasswordSendCodeRequest>
      formError={sendEmailNormalizedError}
      fields={passwordSendCodeFormFieldsConfig}
      initialValue={passwordSendCodeInitValues}
      onSubmit={handleSendEmail}
    />
  )
}
