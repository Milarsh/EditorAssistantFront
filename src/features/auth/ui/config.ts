import type {
  AuthLoginRequest,
  AuthRegisterConfirmRequest,
  AuthRegisterRequest,
} from '@/shared/api'
import type { FormFieldConfig } from '@/shared/ui/form/ui'

export const registerFormFieldsConfig: FormFieldConfig<AuthRegisterRequest>[] =
  [
    {
      type: 'text',
      name: 'email',
      props: {
        placeholder: 'Введите email',
      },
    },
    {
      type: 'text',
      name: 'login',
      props: {
        placeholder: 'Введите логин',
      },
    },
    {
      type: 'password',
      name: 'password',
      props: {
        placeholder: 'Введите пароль',
      },
    },
    {
      type: 'password',
      name: 'password_confirm',
      props: {
        placeholder: 'Повторите пароль',
      },
    },
  ]

export const confirmFormFieldsConfig: FormFieldConfig<AuthRegisterConfirmRequest>[] =
  [
    {
      type: 'text',
      name: 'code',
      props: {
        placeholder: 'Введите код',
      },
    },
  ]

export const loginFormFieldsConfig: FormFieldConfig<AuthLoginRequest>[] = [
  {
    type: 'text',
    name: 'login',
    props: {
      placeholder: 'Введите логин или email',
    },
  },
  {
    type: 'password',
    name: 'password',
    props: {
      placeholder: 'Введите пароль',
    },
  },
]
