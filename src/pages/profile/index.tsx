import { ProfileCard } from '@/features/edit-profile/ui'
import { Header } from '@/shared/ui/header'

export const ProfilePage = () => {
  return (
    <main className="vertical h-screen">
      <Header hideUser />
      <ProfileCard />
    </main>
  )
}
