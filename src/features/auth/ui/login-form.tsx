import { useRouter } from '@tanstack/react-router'

import { useLogin } from '@/features/auth/lib/use-login'
import { Button } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/form-base'
import { TextField } from '@/shared/ui/input'

type LoginFormValues = {
  login: string
  password: string
}

const loginInitialValues: LoginFormValues = {
  login: '',
  password: '',
}

export const LoginForm = () => {
  const { mutateAsync: loginUser } = useLogin()

  const { navigate } = useRouter()

  const handleLogin = async (data: LoginFormValues) => {
    await loginUser(data)

    navigate({ to: '/' })
  }

  return (
    <BaseForm<LoginFormValues>
      initialValues={loginInitialValues}
      onSubmit={handleLogin}
      className="vertical gap-4"
      render={({ values, handleChange }) => (
        <>
          <TextField
            name="login"
            placeholder="Логин или email"
            value={values.login}
            onChange={handleChange}
          />

          <TextField
            name="password"
            type="password"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />

          <Button type="submit" size="xs" className="w-full">
            Войти
          </Button>
        </>
      )}
    />
  )
}
