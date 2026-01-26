import { useRouter } from '@tanstack/react-router'

import { isEmail } from '@/features/auth/lib/utils'
import type { AuthLoginRequest } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { FormWrapper } from '@/shared/ui/form/ui'
import { Typography } from '@/shared/ui/typography'

import { loginFormFieldsConfig } from '../../config'
import { useLogin } from '../lib/use-login'

const ForgetPassword = ({
  onForgetPasswordClick,
}: {
  onForgetPasswordClick: () => void
}) => {
  return (
    <button
      type="button"
      className="mb-2 flex items-end"
      onClick={onForgetPasswordClick}
    >
      <Typography variant="footnote-bold">забыли пароль?</Typography>
    </button>
  )
}

const loginInitialValues: AuthLoginRequest = {
  login: '',
  password: '',
}

export const LoginForm = ({
  onForgetPasswordClick,
}: {
  onForgetPasswordClick: () => void
}) => {
  const { mutateAsync: loginUser, normalizedError } = useLogin()
  const { navigate } = useRouter()

  const handleLogin = async (data: AuthLoginRequest) => {
    const payload = isEmail(data.login || '')
      ? { email: data.login, password: data.password }
      : { login: data.login, password: data.password }

    await loginUser(payload)

    navigate({ to: '/' })
  }

  return (
    <FormWrapper<AuthLoginRequest>
      formError={normalizedError}
      fields={loginFormFieldsConfig}
      initialValue={loginInitialValues}
      onSubmit={handleLogin}
      customSubmitComponent={
        <div className="vertical w-full">
          <ForgetPassword onForgetPasswordClick={onForgetPasswordClick} />
          <Button type="submit">Войти</Button>
        </div>
      }
    />
  )
}
