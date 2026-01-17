import { useRouter } from '@tanstack/react-router'
import { useState } from 'react'

import { useAuthStore } from '@/features/auth/store'
import { Button } from '@/shared/ui/button'
import { BaseForm } from '@/shared/ui/form-base'
import { Header } from '@/shared/ui/header'
import { TextField } from '@/shared/ui/input/text-field'
import { Typography } from '@/shared/ui/typography'

const MOCK_INIT_VALUES = {
  name: 'Алексей Петров',
  email: 'alexey.petrov@example.com',
  phone: '+7 (912) 345-67-89',
}

const ProfileCardTop = () => {
  const { navigate } = useRouter()

  const logout = useAuthStore((state) => state.actions.logout)

  const handleLogout = () => {
    logout()
    navigate({ to: '/' })
  }

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Алексей Петров</h2>
        <p className="text-sm text-gray-500">alexey.petrov@example.com</p>
      </div>
      <Button size="xs" onClick={handleLogout}>
        Выйти из аккаунта
      </Button>
    </div>
  )
}

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <BaseForm
      initialValues={MOCK_INIT_VALUES}
      onSubmit={() => {
        setIsEditing(false)
      }}
      render={({ values, handleChange }) => (
        <div className="border-t border-gray-200 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-gray-800">Личная информация</h3>

            <Button
              onClick={() => {
                setIsEditing(!isEditing)
              }}
              size="xs"
            >
              {isEditing ? 'Сохранить' : 'Редактировать'}
            </Button>
          </div>

          <div className="space-y-4">
            {/* <div> */}
            {/*  <Typography variant="body">Полное имя</Typography> */}
            {/*  <TextField */}
            {/*    name="name" */}
            {/*    value={values.name} */}
            {/*    onChange={handleChange} */}
            {/*    readOnly={!isEditing} */}
            {/*    className="w-full" */}
            {/*  /> */}
            {/* </div> */}

            <div>
              <Typography variant="body">Email</Typography>
              <TextField
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                readOnly={!isEditing}
                className="w-full"
              />
            </div>

            <div>
              <Typography variant="body">Телефон</Typography>
              <TextField
                name="phone"
                value={values.phone}
                onChange={handleChange}
                readOnly={!isEditing}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    />
  )
}

export const ProfileCard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F6FA]">
      <div
        className="w-200 rounded-xl border border-gray-200 bg-white p-8
          shadow-sm"
      >
        <ProfileCardTop />
        <ProfileForm />
      </div>
    </div>
  )
}

export const PersonalPage = () => {
  return (
    <main className="vertical h-screen">
      <Header hideUser />
      <ProfileCard />
    </main>
  )
}
