import { useRouter } from '@tanstack/react-router'

import { useUserInfo } from '@/entities/user/lib'
import { useAuthStore } from '@/features/auth/store'
import { Button } from '@/shared/ui/button'
import { Spinner } from '@/shared/ui/spinner'

import { ProfileForm } from './profile-form'

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
        <h2 className="text-lg font-semibold text-gray-800">{user?.login}</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>
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
    return <Spinner className="size-10" />
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F6FA]">
      <div
        className="w-200 rounded-xl border border-gray-200 bg-white p-8
          shadow-sm"
      >
        <ProfileCardTop />
        <ProfileForm
          initValues={{
            login: user.login || '',
            email: user.email || '',
          }}
        />
      </div>
    </div>
  )
}
