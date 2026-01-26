import type {
  PasswordResetRequest,
  PasswordSendCodeRequest,
} from '@/shared/api'
import type { FormFieldConfig } from '@/shared/ui/form/ui'

export const resetPasswordFormFieldsConfig: FormFieldConfig<PasswordResetRequest>[] =
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
      name: 'code',
      props: {
        placeholder: 'Введите код',
      },
    },
    {
      type: 'password',
      name: 'new_password',
      props: {
        placeholder: 'Введите пароль',
      },
    },
    {
      type: 'password',
      name: 'new_password_confirm',
      props: {
        placeholder: 'Повторите пароль',
      },
    },
  ]

export const passwordSendCodeFormFieldsConfig: FormFieldConfig<PasswordSendCodeRequest>[] =
  [
    {
      type: 'text',
      name: 'email',
      props: {
        placeholder: 'Введите email',
      },
    },
  ]
