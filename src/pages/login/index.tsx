import { useState } from 'react'

import { LoginForm, RegisterForm, ResetPasswordForm } from '@/features/auth/ui'
import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'

type ViewsId = 'login' | 'register' | 'password_reset'

const TABS = [
  { id: 'login', label: 'Вход' },
  { id: 'register', label: 'Регистрация' },
]

export const LoginPage = () => {
  const [activeView, setActiveView] = useState<ViewsId>('login')

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF1F8]">
      <div className="w-100 rounded-lg bg-white p-8 shadow-md">
        <Typography variant="h3" className="mb-6">
          News Aggregator
        </Typography>

        <Tabs
          tabs={TABS}
          activeTab={activeView}
          onChange={(id) => setActiveView(id as ViewsId)}
        />
        {activeView === 'login' && (
          <LoginForm
            onForgetPasswordClick={() => setActiveView('password_reset')}
          />
        )}
        {activeView === 'password_reset' && (
          <ResetPasswordForm onResetSuccess={() => setActiveView('login')} />
        )}
        {activeView === 'register' && (
          <RegisterForm onRegisterSuccess={() => setActiveView('login')} />
        )}
      </div>
    </div>
  )
}
