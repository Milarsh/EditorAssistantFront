import { useState } from 'react'

import { LoginForm } from '@/features/auth/ui/login-form'
import { RegisterForm } from '@/features/auth/ui/register-form/ui'
import { Tabs } from '@/shared/ui/tabs'
import { Typography } from '@/shared/ui/typography'

type TabId = 'login' | 'register'
const TABS = [
  { id: 'login', label: 'Вход' },
  { id: 'register', label: 'Регистрация' },
]

export const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>('login')

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEF1F8]">
      <div className="w-100 rounded-lg bg-white p-8 shadow-md">
        <Typography variant="h3" className="mb-6">
          News Aggregator
        </Typography>

        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onChange={(id) => setActiveTab(id as TabId)}
        />
        {activeTab === 'login' && <LoginForm />}
        {activeTab === 'register' && (
          <RegisterForm onRegisterSuccess={() => setActiveTab('login')} />
        )}
      </div>
    </div>
  )
}
