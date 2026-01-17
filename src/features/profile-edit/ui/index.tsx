import { useRouter } from '@tanstack/react-router'

import { useUserInfo } from '@/entities/user/lib'
import { useAuthStore } from '@/features/auth/store'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

import { ProfileEditForm } from './profile-edit-form'

const ProfileCardTop = () => {
  const { navigate } = useRouter()
  const { data: user } = useUserInfo()
  const logout = useAuthStore((state) => state.actions.logout)

  const handleLogout = () => {
    logout()
    navigate({ to: '/' })
  }

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <Typography variant="h2">{user?.login}</Typography>
        <Typography variant="body">{user?.email}</Typography>
      </div>
      <Button size="xs" onClick={handleLogout}>
        Выйти из аккаунта
      </Button>
    </div>
  )
}

export const ProfileCard = () => {
  const { data: user } = useUserInfo()

  if (!user) {
    return <div className="size-10">Загрузка</div>
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F6FA]">
      <div
        className="w-200 rounded-xl border border-gray-200 bg-white p-8
          shadow-sm"
      >
        <ProfileCardTop />
        <ProfileEditForm
          initValues={{
            login: user.login || '',
            email: user.email || '',
          }}
        />
      </div>
    </div>
  )
}
