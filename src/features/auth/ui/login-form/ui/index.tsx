import { useRouter } from '@tanstack/react-router'

import { isEmail } from '@/features/auth/lib/utils'
import type { AuthLoginRequest } from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { FormBuilder } from '@/shared/ui/form'
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
      <Typography variant="footnote-bold" className="text-neutral-500">
        забыли пароль?
      </Typography>
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
    <FormBuilder<AuthLoginRequest>
      formError={normalizedError}
      fields={loginFormFieldsConfig}
      initialValue={loginInitialValues}
      onSubmit={handleLogin}
      resetAfterSubmit={false}
      customSubmitComponent={
        <div className="vertical w-full">
          <ForgetPassword onForgetPasswordClick={onForgetPasswordClick} />
          <Button type="submit" className="bg-blue-500">
            Войти
          </Button>
        </div>
      }
    />
  )
}
