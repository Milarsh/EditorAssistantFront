import type { ChangeEvent } from 'react'

import type {
  AuthRegisterConfirmRequest,
  AuthRegisterRequest,
} from '@/shared/api'
import { Button } from '@/shared/ui/button'
import { TextField } from '@/shared/ui/input'

export const renderRegisterForm = ({
  values,
  handleChange,
}: {
  values: AuthRegisterRequest
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) => (
  <>
    <TextField
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
    <TextField
      name="login"
      placeholder="Логин"
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
    <TextField
      name="password_confirm"
      type="password"
      placeholder="Повторите пароль"
      value={values.password_confirm}
      onChange={handleChange}
    />

    <Button type="submit" size="xs" className="w-full">
      Зарегистрироваться
    </Button>
  </>
)

export const renderConfirmForm = ({
  values,
  handleChange,
}: {
  values: AuthRegisterConfirmRequest
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}) => (
  <>
    <TextField
      name="code"
      placeholder="Введите код из письма"
      value={values.code}
      onChange={handleChange}
    />

    <Button type="submit" size="xs" className="w-full">
      Подтвердить
    </Button>
  </>
)
