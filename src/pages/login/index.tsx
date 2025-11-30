import { useRouter } from '@tanstack/react-router'
import { type FormEvent } from 'react'

import { useAuthStore } from '@/features/auth/store'
import { Button } from '@/shared/ui/button'

export const LoginPage = () => {
  const { navigate } = useRouter()
  const { login } = useAuthStore((s) => s.actions)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    login()

    navigate({ to: '/' })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF1F8]">
      <div className="w-100 rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-lg font-semibold text-gray-800">
          News Agregator
        </h1>

        <div className="mb-6 flex space-x-6">
          <button
            type="button"
            className="border-b-2 border-blue-600 pb-1 font-medium
              text-blue-600"
          >
            Вход
          </button>
          <button type="button" className="text-gray-500 hover:text-gray-700">
            Регистрация
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введите логин"
            className="w-full rounded-md border border-gray-300 px-3 py-2
              focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <div className="relative">
            <input
              type="password"
              placeholder="Введите пароль"
              className="w-full rounded-md border border-gray-300 px-3 py-2
                pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <Button size="xs" onClick={handleSubmit}>
            Войти
          </Button>
        </form>
      </div>
    </div>
  )
}
