import { useState } from 'react'

import { useTgAuthStatus } from '@/entities/telegram/lib'
import { useTgAuthLogout } from '@/entities/telegram/lib/hooks/use-tg-auth-logout'
import { TgAuthStatusStatusEnum } from '@/shared/api'
import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'

import { TgAuthModal } from './tg-auth-modal'

export const TgAuth = () => {
  const { data, isLoading, isError } = useTgAuthStatus()
  const [modalOpen, setModalOpen] = useState(false)
  const { mutate: logout } = useTgAuthLogout()

  if (isLoading) {
    return <div className="p-8">Загрузка...</div>
  }

  if (isError || !data) {
    return <div className="p-8 text-red-500">Ошибка загрузки</div>
  }

  if (data?.status === 'error') {
    return <div className="p-2 text-red-500">Ошибка: {data.error}</div>
  }

  const { status, user } = data

  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">
        Привязка Telegram-аккаунта
      </h2>

      <div
        className={cn(
          'rounded-xl p-8',
          status === TgAuthStatusStatusEnum.Authorized
            ? 'bg-green-100'
            : 'bg-red-100',
        )}
      >
        <div className="mb-4 flex items-center gap-4">
          <span className="text-xl font-medium">
            {status === TgAuthStatusStatusEnum.Authorized
              ? 'Telegram привязан'
              : 'Telegram не привязан'}
          </span>

          <span
            className={cn(
              'rounded-full px-4 py-1 text-sm text-white',
              status === TgAuthStatusStatusEnum.Authorized
                ? 'bg-green-500'
                : 'bg-red-500',
            )}
          >
            {status === TgAuthStatusStatusEnum.Authorized
              ? 'Активно'
              : 'Неактивно'}
          </span>
        </div>

        {/* НЕ АВТОРИЗОВАН */}
        {(status === TgAuthStatusStatusEnum.Unauthorized ||
          status === TgAuthStatusStatusEnum.Expired ||
          status === TgAuthStatusStatusEnum.Pending) && (
          <>
            <p className="mb-6 text-gray-600">
              Привяжите свой аккаунт, чтобы получать уведомления из Telegram
            </p>

            <Button onClick={() => setModalOpen(true)} className="bg-blue-600">
              Авторизоваться в Telegram
            </Button>
            <TgAuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </>
        )}

        {/* /!* QR *!/ */}
        {/* {status === TgAuthStatusStatusEnum.Pending && qr_url && ( */}
        {/*  <div className="flex flex-col items-center gap-4"> */}
        {/*    <p className="text-gray-600"> */}
        {/*      Отсканируйте QR код в Telegram */}
        {/*    </p> */}

        {/*    <img */}
        {/*      src={qr_url} */}
        {/*      alt="Telegram QR" */}
        {/*      className="w-48 h-48" */}
        {/*    /> */}
        {/*  </div> */}
        {/* )} */}

        {/* /!* 2FA *!/ */}
        {/* {status === TgAuthStatusStatusEnum.PasswordRequired && ( */}
        {/*  <div className="flex flex-col gap-4 max-w-sm"> */}
        {/*    <p className="text-gray-600"> */}
        {/*      Требуется пароль Telegram (2FA) */}
        {/*    </p> */}

        {/*    <input */}
        {/*      type="password" */}
        {/*      placeholder="Введите пароль" */}
        {/*      className="border rounded-lg p-3" */}
        {/*    /> */}

        {/*    <button className="bg-blue-600 text-white py-2 rounded-lg"> */}
        {/*      Подтвердить */}
        {/*    </button> */}
        {/*  </div> */}
        {/* )} */}

        {/* АВТОРИЗОВАН */}
        {status === TgAuthStatusStatusEnum.Authorized && user && (
          <>
            <div className="mb-6 space-y-2 text-gray-700">
              <p>
                Имя:{' '}
                <span className="font-medium">
                  {user.first_name} {user.last_name}
                </span>
              </p>

              <p>
                Username: <span className="font-medium">@{user.username}</span>
              </p>

              <p>
                Телефон: <span className="font-medium">+{user.phone}</span>
              </p>
            </div>

            <button
              onClick={() => logout()}
              type="button"
              className="rounded-lg bg-red-500 px-6 py-3 text-white transition
                hover:bg-red-600"
            >
              Отвязать аккаунт
            </button>
          </>
        )}
      </div>
    </div>
  )
}
